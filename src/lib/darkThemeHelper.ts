import { Appearance } from "react-native";

export const isDark = (
  syntax: string,
  mode: "dark" | "light" | "system"
): boolean =>
  syntax?.includes("dark:") &&
  (mode === "dark" ||
    (mode === "system" && Appearance.getColorScheme() === "dark"));
