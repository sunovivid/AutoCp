package com.github.pushpavel.autocp.common.ui.swing

import java.awt.*

/**
 * Swing layout manager similar to FlowLayout but with following differences
 * - top-left alignment
 * - respects minimum sizes of children
 * - flows in vertical or horizontal direction
 */
class AutoLayout(private val mainAxis: MainAxis = MainAxis.HORIZONTAL) : LayoutManager {

    enum class MainAxis { HORIZONTAL, VERTICAL }

    override fun addLayoutComponent(name: String?, comp: Component?) {
    }

    override fun removeLayoutComponent(comp: Component?) {
    }

    override fun preferredLayoutSize(parent: Container) = calculateSize(parent) { it.preferredSize }

    override fun minimumLayoutSize(parent: Container) = calculateSize(parent) { it.minimumSize }


    override fun layoutContainer(parent: Container) {
        var main = 0
        var cross = 0
        var currCrossMax = 0
        val maxMain = parent.size.main - parent.insets.mainStart - parent.insets.mainEnd

        for (component in parent.components) {
            if (!component.isVisible) continue
            val (nextLine, end) = calculateMainAxisComponentEnd(
                main,
                maxMain,
                component.preferredSize.main,
                component.minimumSize.main
            )

            if (nextLine) {
                cross += currCrossMax
                main = 0
                currCrossMax = 0
            }

            currCrossMax = maxOf(currCrossMax, component.preferredSize.cross)

            val cMain = parent.insets.mainStart + main
            val cMainLength = end - main

            component.applyBounds(cMain, cross, cMainLength, component.preferredSize.cross)

            // account for applied component size
            main += cMainLength
        }
    }

    private fun Component.applyBounds(mainStart: Int, crossStart: Int, mainLength: Int, crossLength: Int) {
        if (mainAxis == MainAxis.HORIZONTAL)
            setBounds(mainStart, crossStart, mainLength, crossLength)
        else
            setBounds(crossStart, mainStart, crossLength, mainLength)
    }

    /**
     * Calculates whether to move next line and the end of the component in main axis
     */
    private fun calculateMainAxisComponentEnd(
        main: Int,
        maxMain: Int,
        preferredMain: Int,
        minimumMain: Int
    ): Pair<Boolean, Int> {
        return if (main + preferredMain <= maxMain) {
            Pair(false, main + preferredMain)
        } else if (preferredMain <= maxMain) {
            Pair(true, preferredMain)
        } else if (minimumMain <= maxMain) {
            Pair(true, maxMain)
        } else {
            Pair(true, minimumMain)
        }
    }


    private fun calculateSize(parent: Container, getChildSize: (Component) -> Dimension): Dimension {
        var x = 0
        var y = 0
        var currMaxHeight = 0
        val maxWidth = parent.width - parent.insets.left - parent.insets.right

        for (component in parent.components) {
            if (!component.isVisible) continue
            val d = getChildSize(component)
            if (x + d.width > maxWidth) {
                x = 0
                y += currMaxHeight
                currMaxHeight = 0
            } else {
                x += d.width
                currMaxHeight = maxOf(currMaxHeight, d.height)
            }
        }
        y += currMaxHeight

        val dim = Dimension(x, y)

        // add insets of parent
        dim.width += parent.insets.left + parent.insets.right
        dim.height += parent.insets.top + parent.insets.bottom
        return dim
    }

    // Normalize Dimensions to main and cross axis
    private val Dimension.main get() = if (mainAxis == MainAxis.HORIZONTAL) width else height
    private val Dimension.cross get() = if (mainAxis == MainAxis.HORIZONTAL) height else width
    private val Insets.mainStart get() = if (mainAxis == MainAxis.HORIZONTAL) left else top
    private val Insets.mainEnd get() = if (mainAxis == MainAxis.HORIZONTAL) right else bottom
    private val Insets.crossStart get() = if (mainAxis == MainAxis.HORIZONTAL) top else left
    private val Insets.crossEnd get() = if (mainAxis == MainAxis.HORIZONTAL) bottom else right
}