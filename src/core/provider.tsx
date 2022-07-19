import React, { PureComponent, FC, useMemo, useState } from "react";
import { OsmiContext } from "./context";
import { osmiPredfined } from "../predefined/map";
import { customProcessor } from "../processor/multiThemeProcessor";

// Import Scale Utility
import { scaleWidth, scaleHeight } from "../lib/responsive";

// Types
import type { CustomThemeType } from "../processor/processor.type";
import type { Mode } from "./context";

interface OsmiProviderProps {
  theme?: CustomThemeType;
  children: JSX.Element;
}

export const OsmiProvider: FC<OsmiProviderProps> = (props) => {
  const [mode, setMode] = useState<keyof typeof Mode>("system");
  const switchMode = (newMode: keyof typeof Mode) => {
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
