package settings.langSettings.model

import com.intellij.lang.Language
import ui.swing.TileCellRenderer

data class Lang(
    val langId: String,
    val fileTemplateName: String?,
    val defaultBuildConfigId: Long?,
    val buildConfigs: List<BuildConfig>,
) {

    fun getLanguage() = Language.findLanguageByID(langId)

    companion object {
        fun cellRenderer(emptyText: String = "None"): TileCellRenderer<Lang> {
            return TileCellRenderer(emptyText = emptyText) {
                Language.findLanguageByID(it.langId)?.apply {
                    text = displayName
                    icon = associatedFileType?.icon
                }
            }
        }
    }
}