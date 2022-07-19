import React, { useContext } from "react";
import { Appearance } from "react-native";
import { OsmiContext } from "../core/context";

export default (syntax: string, mode: string): boolean => {
  if (
    syntax.includes("dark:") &&
    (mode === "dark" ||
      (mode === "system" && Appearance.getColorScheme() === "dark"))
  ) {
    return true;
  }

  return false;
};
