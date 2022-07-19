import React, { useCallback } from "react";
import { OsmiContext } from "./context";
import { applyHelper } from "./apply";
import type { NamedStyles } from "../types/osmi.types";

export const useStyles = () => {
  const themeContext = React.useContext(OsmiContext);

  if (themeContext === null) {
    throw new Error("You must wrap your components in a OsmiProvider.");
  }

  const apply = useCallback(
    <T extends NamedStyles<T> | NamedStyles<any>>(...args: string[]) => {
      return applyHelper(...args)(themeContext);
    },
    [themeContext]
  );

  return {
    apply,
    switchTheme: themeContext.switchMode,
    scaleWidth: themeContext.scaleWidth,
    scaleHeight: themeContext.scaleHeight,
  };
};
