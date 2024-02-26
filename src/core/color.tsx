import { isDark } from "../lib/darkThemeHelper";
import type { OsmiContextInstance } from "../types/osmi.types";

const getColor = (themeContext: OsmiContextInstance, colorKey: string, opacity?: string) => {
  const color = themeContext.theme[colorKey];
  if (typeof color !== "string") {
    throw Error("Invalid color syntax");
  }
  const alpha = opacity ? (Number(opacity) / 100).toFixed(2) : "1";
  return color.replace("--osmi-opacity", alpha);
};

export const colorHelper = (syntax: string) => (themeContext: OsmiContextInstance) => {
  const [baseSyntax, darkSyntax] = syntax.split(" ").map(s => s.replace("dark:", ""));
  const [colorKey, opacity] = (isDark(darkSyntax, themeContext.mode) ? darkSyntax : baseSyntax).split("/");

  return getColor(themeContext, colorKey, opacity);
};
