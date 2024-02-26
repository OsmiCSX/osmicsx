import React, { FC, useCallback, useMemo, useState } from "react";
import { OsmiContext } from "./context";
import { osmiPredfined } from "../predefined";
import { customProcessor } from "../processor";

// Import Scale Utility
import { scaleWidth, scaleHeight } from "../lib/responsive";

// Types
import type { OsmiProviderProps, ThemeMode } from "../types/osmi.types";

export const OsmiProvider: FC<OsmiProviderProps> = ({
  theme: propTheme,
  children,
}) => {
  const [mode, setMode] = useState<keyof typeof ThemeMode>("system");
  const switchMode = useCallback((newMode: keyof typeof ThemeMode) => {
    setMode(newMode);
  }, []);

  const theme = useMemo(() => {
    return propTheme !== undefined
      ? {
          ...osmiPredfined,
          ...customProcessor(propTheme),
        }
      : osmiPredfined;
  }, [propTheme]);

  return (
    <OsmiContext.Provider
      value={{ mode, switchMode, theme, scaleWidth, scaleHeight }}
    >
      {children}
    </OsmiContext.Provider>
  );
};
