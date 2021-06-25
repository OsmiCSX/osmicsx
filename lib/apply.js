import Instance from "./instance"

/**
 * Helper function for group styling
 */
function apply() {
  const instanceStyle = new Instance()

  const arrStyle = arguments[0].split(" ")

  arrStyle.map((item) => {
    // check if width & size using responsive method or not
    instanceStyle.responsiveSize(item)

    // auto generate fixed width size
    instanceStyle.fixedWidthSize(item)

    // auto generate fixed width size
    instanceStyle.fixedHeightSize(item)

    // Check if there's coloring opacity
    instanceStyle.colorOpacity(item)

    // Check if there's any dark theme
    instanceStyle.darkTheme(item)

    // Generate from pre-defined styles
    instanceStyle.predefinedStyles(item)
  })

  if (arrStyle.length === 1) {
    if (typeof instanceStyle.predefined[arrStyle[0]] === "string") {
      return instanceStyle.predefined[arrStyle[0]].replace("--osmi-opacity", 1)
    } else {
      return instanceStyle.getOutputStyle()
    }
  } else {
    return instanceStyle.getOutputStyle()
  }
}

export default apply
