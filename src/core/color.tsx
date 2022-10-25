import { isDark } from "../lib/darkThemeHelper";
import type { OsmiContextInstance } from "../types/osmi.types";

export const colorHelper =
  (syntax: string) => (themeContext: OsmiContextInstance | null) => {
    const splitSyntax = syntax.split(" ");
    let color = "";

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

        return color;
      }

      throw Error("Invalid color syntax");
    } else if (
      splitSyntax.length === 2 &&
      splitSyntax.some((syntax) => syntax.includes("dark:color-"))
    ) {
      const findDefaultColor =
        splitSyntax.find((syntax) => !syntax.includes("dark:color-")) ?? "";
      const findDarkColor =
        splitSyntax.find((syntax) => syntax.includes("dark:color-")) ?? "";
      const defaultColor = findDefaultColor?.replace("color-", "")?.split("/");
      const darkColor = findDarkColor?.replace("dark:color-", "")?.split("/");

      if (isDark(findDarkColor, themeContext?.mode ?? "")) {
        const getPredefinedColor = themeContext?.theme[darkColor[0]];

        if (typeof getPredefinedColor === "string") {
          color = getPredefinedColor.replace(
            "--osmi-opacity",
            darkColor[1] !== undefined
              ? (Number(darkColor[1]) / 100).toFixed(2)
              : "1"
          );

          return color;
        }

        throw Error("Invalid color syntax");
      } else {
        const getPredefinedColor = themeContext?.theme[defaultColor[0]];

        if (typeof getPredefinedColor === "string") {
          color = getPredefinedColor.replace(
            "--osmi-opacity",
            defaultColor[1] !== undefined
              ? (Number(defaultColor[1]) / 100).toFixed(2)
              : "1"
          );
          return color;
        }

        throw Error("Invalid color syntax");
      }
    }

    throw Error("Invalid color syntax");
  };
