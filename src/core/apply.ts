import { Instance } from "./instance";
import { isDark } from "../lib/darkThemeHelper";
import type { NamedStyles, OsmiContextInstance } from "../types/osmi.types";

export const applyHelper =
  <T extends NamedStyles<T> | NamedStyles<any>>(...args: string[]) =>
  (themeContext: OsmiContextInstance | null) => {
    const outputStyles: object[] = [];
    let returnColorOnly = false;
    let color: string = "";

    // Check if it's color only
    if (args.length === 1) {
      const splitSyntax = args[0].split(" ");

      if (splitSyntax.length === 1 && splitSyntax[0].includes("color-")) {
        const removePrefix = splitSyntax[0].replace("color-", "");
        const splitOpacity = removePrefix.split("/");
        const getPredefinedColor = themeContext?.theme[splitOpacity[0]];

        if (typeof getPredefinedColor === "string") {
          color = getPredefinedColor.replace(
            "--osmi-opacity",
            splitOpacity[1] !== undefined
              ? (Number(splitOpacity[1]) / 100).toFixed(2)
              : "1"
          );
          returnColorOnly = true;
        }
      } else if (
        splitSyntax.length === 2 &&
        splitSyntax.some((syntax) => syntax.includes("dark:color-"))
      ) {
        const findDefaultColor =
          splitSyntax.find((syntax) => !syntax.includes("dark:color-")) ?? "";
        const findDarkColor =
          splitSyntax.find((syntax) => syntax.includes("dark:color-")) ?? "";
        const defaultColor = findDefaultColor
          ?.replace("color-", "")
          ?.split("/");
        const darkColor = findDarkColor?.replace("dark:color-", "")?.split("/");

        if (isDark(findDarkColor, themeContext?.mode)) {
          const getPredefinedColor = themeContext?.theme[darkColor[0]];

          if (typeof getPredefinedColor === "string") {
            color = getPredefinedColor.replace(
              "--osmi-opacity",
              darkColor[1] !== undefined
                ? (Number(darkColor[1]) / 100).toFixed(2)
                : "1"
            );
            returnColorOnly = true;
          }
        } else {
          const getPredefinedColor = themeContext?.theme[defaultColor[0]];

          if (typeof getPredefinedColor === "string") {
            color = getPredefinedColor.replace(
              "--osmi-opacity",
              defaultColor[1] !== undefined
                ? (Number(defaultColor[1]) / 100).toFixed(2)
                : "1"
            );
            returnColorOnly = true;
          }
        }
      } else {
        color = "";
        returnColorOnly = false;
      }
    } else {
      color = "";
      returnColorOnly = false;
    }

    if (!returnColorOnly) {
      // Get syntax from each args
      for (let i = 0; i < args.length; i++) {
        // Init instance
        const instanceStyle = new Instance(themeContext?.theme);

        // Get syntax list from each args
        const argStyle = args[i];
        const syntaxList = argStyle.split(" ");
        const sortingSyntax = [
          ...syntaxList.filter(
            (item) => !item.includes("dark:") && !item.includes("notch:")
          ),
          ...syntaxList.filter((item) => item.includes("notch:")),
          ...syntaxList.filter((item) => item.includes("dark:")),
        ];

        sortingSyntax.map((syntax: string) => {
          // Only allow string syntax
          if (typeof syntax !== "string") {
            throw new Error("Invalid styling syntax.");
          }

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
          instanceStyle.darkTheme(syntax, themeContext?.mode ?? "system");

          // Generate from pre-defined styles
          instanceStyle.predefinedStyles(syntax);

          // Check if there's notch or not.
          instanceStyle.notch(syntax);
        });

        outputStyles.push(instanceStyle.getOutputStyle());
      }
    }

    return returnColorOnly ? (color as any) : (outputStyles as any[]);
  };
