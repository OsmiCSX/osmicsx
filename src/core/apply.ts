import Instance from "./instance";

/**
 * Apply some pre-defined styles
 * @param {string} args list of pre-definedstyle args
 * @returns {object}
 */
const apply = (args: string): object => {
  const instanceStyle = new Instance();

  const arrStyle = args.split(" ");

  arrStyle.map((syntax: string) => {
    // check if width & size using responsive method or not
    instanceStyle.responsiveSize(syntax);

    // auto generate percentage size
    instanceStyle.percentSize(syntax);

    // auto generate fixed width size
    instanceStyle.fixedWidthSize(syntax);

    // auto generate fixed width size
    instanceStyle.fixedHeightSize(syntax);

    // auto generate transform position
    instanceStyle.transformTranslate(syntax);

    // auto generate transform scale
    instanceStyle.transformScale(syntax);

    // auto generate transform skew
    instanceStyle.transformSkew(syntax);

    // auto generate transform rotate
    instanceStyle.transformRotate(syntax);

    // Check if there's coloring opacity
    instanceStyle.colorOpacity(syntax);

    // Check if there's any dark theme
    instanceStyle.darkTheme(syntax);

    // Generate from pre-defined styles
    instanceStyle.predefinedStyles(syntax);

    // Check if there's notch or not.
    instanceStyle.notch(syntax);
  });

  if (arrStyle.length === 1) {
    if (typeof instanceStyle.predefined[arrStyle[0]] === "string") {
      return instanceStyle.predefined[arrStyle[0]].replace("--osmi-opacity", 1);
    } else {
      return instanceStyle.getOutputStyle();
    }
  } else {
    return instanceStyle.getOutputStyle();
  }
};

export default apply;
