import React from "react";
import type { CustomThemeType } from "../processor/processor.type";

export enum Mode {
  "system" = "system",
  "dark" = "dark",
  "light" = "light",
}

interface OsmiContextInstance {
  theme: Record<string, object | string>;
  mode: keyof typeof Mode;
  switchMode: (newMode: keyof typeof Mode) => void;
  scaleWidth: (width: number) => number;
  scaleHeight: (height: number) => number;
}

export const OsmiContext = React.createContext<OsmiContextInstance | null>(
  null
);
