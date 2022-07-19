import React, { FC, useMemo, useState } from "react";
import { OsmiContext } from "./context";
import { osmiPredfined } from "../predefined";
import { customProcessor } from "../processor";

// Import Scale Utility
import { scaleWidth, scaleHeight } from "../lib/responsive";

// Types
import type { OsmiProviderProps, ThemeMode } from "../types/osmi.types";

export const OsmiProvider: FC<OsmiProviderProps> = (props) => {
  const [mode, setMode] = useState<keyof typeof ThemeMode>("system");
  const switchMode = (newMode: keyof typeof ThemeMode) => {
    setMode(newMode);
  };

  const theme = useMemo(() => {
    return props?.theme !== undefined
      ? {
          ...osmiPredfined,
          ...customProcessor(props?.theme),
        }
      : osmiPredfined;
  }, [props.theme]);

  return (
    <OsmiContext.Provider
      value={{ mode, switchMode, theme, scaleWidth, scaleHeight }}
    >
      {props.children}
    </OsmiContext.Provider>
  );
};
