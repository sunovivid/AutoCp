@file:Suppress("MemberVisibilityCanBePrivate")

package common.res

import database.models.Problem
import gather.models.GenerateFileErr
import settings.generalSettings.OpenFileOnGather


object AutoCpStrings {
    const val runConfigName = "AutoCp Solution"
    const val runConfigId = "AutoCp"
    const val runConfigDescription = "Test your Competitive Programming solution with AutoCp"


    // File Issue notes
    const val fileIssue = "please file an issue (https://github.com/Pushpavel/AutoCp/issues/new/choose)"

    fun defaultFileIssue(e: Exception) = "" +
            "An error had occurred. If it is not expected, $fileIssue\n\n" +
            "The Error message:\n${e.localizedMessage}\n" +
            "Stacktrace:\n${e.stackTraceToString()}"


    // Settings strings
    const val projectSettingsOverrideMsg = "Some of these settings could be overridden at Tools > AutoCp > Project"


    // General Settings strings
    const val openFilesOnGatherText = "Open files while gathering problems from competitive companion"

    fun OpenFileOnGather.presentable() = when (this) {
        OpenFileOnGather.NONE -> "None"
        OpenFileOnGather.ONLY_FIRST -> "Only first"
        OpenFileOnGather.ALL -> "All"
    }

    // Common Err strings
    const val noReachErrMsg = "Execution should not have reached this line, $fileIssue"


    // Problem Gathering Action strings
    const val startGatheringText = "Start problem gathering service"
    const val stopGatheringText = "Stop problem gathering service"

    const val startGatheringDesc =
        "Start an AutoCp service that listens for problem data coming from competitive companion browser extension"

    const val stopGatheringDesc =
        "Stops an AutoCp service that is listening for problem data coming from competitive companion browser extension"

    const val gatheringServiceOnStart = "Start problem gathering service when project loads"
    const val gatheringServiceOnStartDesc = "" +
            "problem gathering service listens for problem data coming " +
            "from competitive companion browser extension to " +
            "generate files."

    // Solution File Generation Messages
    fun fileGenFailedTitle(name: String) = "$name file is not created"

    const val langNotConfiguredMsg = "" +
            "No Programming Language is configured with AutoCp. " +
            "Please configure languages that you use at Settings/Preference > Tools > AutoCp > Languages"

    fun fileAlreadyExistsMsg(e: GenerateFileErr.FileAlreadyExistsErr) = "" +
            "File already exists.\nPath to file: ${e.filePath}"

    fun fileTemplateMissingMsg(e: GenerateFileErr.FileTemplateMissingErr) = "" +
            "Your Preferred language \"${e.lang.getLanguage()?.displayName}\" does not have a File Template. " +
            "Please check at Settings/Preference > Tools > AutoCp > Languages > " +
            "${e.lang.getLanguage()?.displayName} > File Template\n\n" +
            "For creating a new template, go to Settings/Preference > Editor > File and code templates > Files tab > +"


    // Problem Gathering Service Server strings
    const val serverTitle = "Problem Gathering Service"
    const val serverRunningMsg = "" +
            "Started AutoCp Problem Gathering Service...\n" +
            "Open the problem/ contest page in the browser and " +
            "press the Competitive companion button to generate solution files.\n\n" +
            "You can stop this service by Tools > $stopGatheringDesc\n" +
            "or to prevent starting this service on project loading, go to Settings/Preferences > Tools > AutoCp"

    const val serverStoppedMsg = "Service has been stopped. " +
            "Use Tools > $startGatheringText to start it."

    fun portTakenMsg(port: Int) = "Port $port is already in use."

    fun portRetryMsg(port: Int) = "Retrying with port $port..."

    fun allPortFailedMsg() = "" +
            "Could not find a free port to use with competitive companion. " +
            "You may be running multiple instances of AutoCp installed IDEs or other tools that use competitive companion. " +
            "Try closing other programs or restarting your pc. If this issue still occurs, " + fileIssue


    // Problem Gathering Service Gathering strings
    const val problemGatheringTitle = "Problem Gathering"

    const val competitiveCompanionJsonFormatErrMsg =
        "The Problem sent by competitive companion was not parsed correctly. This was not supposed to happen, $fileIssue"

    fun gatheredReport(problems: List<Problem>, total: Int) = "" +
            "(${problems.size}/${total}) problems gathered.\n" +
            problems.joinToString(separator = "\n") { "\t" + it.name }

    fun allProblemsGatheredMsg(problems: List<Problem>, total: Int) = "" +
            "All problems gathered from ${problems.first().groupName}\n\n" +
            gatheredReport(problems, total)


    fun gatheringProblemsCancelled(problems: List<Problem>, total: Int) = "" +
            "You have cancelled.\n\n" +
            gatheredReport(problems, total)

    fun gatheringJsonErrMsg(problems: List<Problem>, total: Int?) = "" +
            competitiveCompanionJsonFormatErrMsg + "\n\n" +
            if (total != null) gatheredReport(problems, total) else ""


    fun gatheringProblemTimeout(problems: List<Problem>, total: Int) = "" +
            "Competitive companion has not responded for too long. You should try again.\n" +
            "This could happen due to below reasons\n" +
            "\t1.Competitive companion is shutdown (you may have closed the browser tab)\n" +
            "\t2.you clicked competitive companion button before AutoCp started listening.\n" +
            "if these were not the reason, $fileIssue\n\n" +
            gatheredReport(problems, total)

}

fun String.failed(): String = "$this Failed"
fun String.cancelled(): String = "$this Cancelled"

fun String.success(): String = "$this Successful"