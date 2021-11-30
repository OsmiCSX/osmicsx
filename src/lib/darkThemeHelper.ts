import { Appearance } from "react-native";

// import appearance hook.
import { appearanceHook } from "../core/appearance";

export default (syntax: string): boolean => {
  if (
    syntax.includes("dark:") &&
    (appearanceHook.activeTheme === "dark" ||
      (appearanceHook.activeTheme === "system" &&
        Appearance.getColorScheme() === "dark"))
  ) {
    return true;
  }

  return false;
};
