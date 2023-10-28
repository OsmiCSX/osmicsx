import { isDark } from "../lib/darkThemeHelper";
import type { OsmiContextInstance } from "../types/osmi.types";

const getColor = (themeContext: OsmiContextInstance | null, colorKey: string, opacity: string) => {
  const predefinedColor = themeContext?.theme[colorKey];

  if (typeof predefinedColor === "string") {
    return predefinedColor.replace(
      "--osmi-opacity",
      opacity !== undefined ? (Number(opacity) / 100).toFixed(2) : "1"
    );
  } else {
    throw Error("Invalid color syntax");
  }
};

export const colorHelper =
  (syntax: string | boolean | undefined) => (themeContext: OsmiContextInstance | null) => {
    const splitSyntax = (syntax as string).split(" ");

    if (splitSyntax.length === 1) {
      const [colorKey, opacity] = splitSyntax[0].split("/");
      return getColor(themeContext, colorKey, opacity);
    }

    if (splitSyntax.length === 2 && splitSyntax.some((s) => s.includes("dark:"))) {
      const defaultSyntax = splitSyntax.find((s) => !s.includes("dark:")) ?? "";
      const darkSyntax = splitSyntax.find((s) => s.includes("dark:"))?.replace("dark:", "") ?? "";

      const [defaultColor, defaultOpacity] = defaultSyntax.split("/");
      const [darkColor, darkOpacity] = darkSyntax.split("/");

      if (isDark(darkSyntax, themeContext?.mode ?? "")) {
        return getColor(themeContext, darkColor, darkOpacity);
      } else {
        return getColor(themeContext, defaultColor, defaultOpacity);
      }
    }

    throw Error("Invalid color syntax");
  };
