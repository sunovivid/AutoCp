package config

import com.intellij.openapi.options.SettingsEditor
import com.intellij.openapi.project.DumbAware
import com.intellij.openapi.project.Project
import com.intellij.openapi.ui.DialogPanel
import com.intellij.openapi.ui.ValidationInfo
import com.intellij.openapi.vfs.LocalFileSystem
import com.intellij.openapi.vfs.VirtualFile
import com.intellij.ui.CollectionComboBoxModel
import com.intellij.ui.layout.ValidationInfoBuilder
import com.intellij.ui.layout.panel
import database.autoCp
import settings.langSettings.AutoCpLangSettings
import settings.langSettings.model.BuildConfig
import settings.langSettings.model.Lang
import ui.dsl.comboBoxView
import ui.dsl.startValidating
import ui.helpers.isError
import kotlin.io.path.Path

/**
 * UI Editor of [AutoCpConfig] Run Configuration
 */
class ConfigEditor(project: Project) : SettingsEditor<AutoCpConfig>(), DumbAware {
    var solutionFilePath = ""
    private var buildConfigId: Long? = null

    private val buildConfigsModel = CollectionComboBoxModel<BuildConfig>()

    private var lang: Lang? = null

    private lateinit var editor: DialogPanel
    private val db = project.autoCp()
    private val invalidFields = mutableMapOf<String, Boolean>()

    override fun createEditor() = panel {
        row("Solution File:") {
            textFieldWithBrowseButton(::solutionFilePath, "Select Solution File")
                .withValidationOnInput { validateSolutionFilePath(it.text) }
        }
        row("Build Configuration:") {
            comboBoxView(
                buildConfigsModel,
                { it.id == buildConfigId },
                { buildConfigId = it?.id },
                BuildConfig.cellRenderer()
            ).withValidationOnInput {
                val info = if (lang != null && buildConfigsModel.isEmpty) {
                    error("No Build Configuration is setup for ${lang?.getLanguage()?.displayName}")
                } else null

                invalidFields["buildConfigId"] = info.isError()

                info
            }
        }
    }.also {
        editor = it
        it.startValidating(this)
    }


    private fun ValidationInfoBuilder.validateSolutionFilePath(pathString: String): ValidationInfo? {
        val info = run {
            if (pathString.isBlank())
                return@run error("Must not be empty")

            val file: VirtualFile?

            try {
                file = LocalFileSystem.getInstance().findFileByNioFile(Path(pathString))
            } catch (e: Exception) {
                return@run error("Invalid path")
            }

            if (file?.exists() != true)
                return@run error("File does not exists")

            lang = AutoCpLangSettings.findLangByFile(file)
                ?: return@run warning("File's language is not registered in Settings/Preferences > Tools > AutoCp > Languages")

            buildConfigsModel.replaceAll(lang!!.buildConfigs)

            if (!db.solutionFiles.containsKey(pathString))
                return@run warning("File is not associated with any Competitive programming problem, only files generated by AutoCp after gathering using Tools > Gather Problems can be used")

            null
        }

        if (info.isError()) {
            lang = null
            buildConfigsModel.removeAll()
        }

        invalidFields["solutionFilePath"] = info.isError()

        return info
    }

    /**
     * Settings to UI
     */
    override fun resetEditorFrom(s: AutoCpConfig) {
        solutionFilePath = s.solutionFilePath
        buildConfigId = s.buildConfigId
        editor.reset()
    }

    /**
     * UI to Settings
     */
    override fun applyEditorTo(s: AutoCpConfig) {
        editor.apply()

        if (invalidFields.any { it.value })
            return

        s.solutionFilePath = solutionFilePath
        s.buildConfigId = buildConfigId
    }

}