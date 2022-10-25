import { Instance } from "./instance";
import type { NamedStyles, OsmiContextInstance } from "../types/osmi.types";

export const applyHelper =
  <T extends NamedStyles<T> | NamedStyles<any>>(...args: string[]) =>
  (themeContext: OsmiContextInstance | null) => {
    const outputStyles: object[] = [];

    // Get syntax from each args
    for (let i = 0; i < args.length; i++) {
      // Init instance
      const instanceStyle = new Instance(themeContext?.theme);

      // Get syntax list from each args
      const argStyle = args[i];
      const syntaxList = argStyle.split(" ");
      const sortedSyntax = [
        ...syntaxList.filter(
          (item) =>
            !item.includes("dark:") &&
            !item.includes("notch:") &&
            !item.includes("android:") &&
            !item.includes("ios:")
        ),
        ...syntaxList.filter((item) => item.includes("android:")),
        ...syntaxList.filter((item) => item.includes("ios:")),
        ...syntaxList.filter((item) => item.includes("notch:")),
        ...syntaxList.filter((item) => item.includes("dark:")),
      ];

      sortedSyntax.map((syntax: string) => {
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

        // Check for android platform only
        instanceStyle.android(syntax);

        // Check for ios platform only
        instanceStyle.ios(syntax);

        // Check if there's notch or not.
        instanceStyle.notch(syntax);
      });

      outputStyles.push(instanceStyle.getOutputStyle());
    }

    return outputStyles as any[];
  };
