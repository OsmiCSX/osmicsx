import { Appearance } from "react-native";

export const isDark = (syntax: string, mode: string): boolean => {
  if (
    syntax.includes("dark:") &&
    (mode === "dark" ||
      (mode === "system" && Appearance.getColorScheme() === "dark"))
  ) {
    return true;
  }

  return false;
};
