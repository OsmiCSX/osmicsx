import React, { useCallback } from "react";
import { OsmiContext } from "./context";
import { applyHelper } from "./apply";
import { colorHelper } from "./color";
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

  const colors = useCallback(
    (...args: string[]): string | string[] => {
      if (args.length === 1) {
        return colorHelper(args[0])(themeContext);
      } else if (args.length === 2) {
        return args.map((syntax) => colorHelper(syntax)(themeContext));
      } else {
        throw Error("Invalid color syntax");
      }
    },
    [themeContext]
  );

  return {
    apply,
    colors,
    switchTheme: themeContext.switchMode,
    scaleWidth: themeContext.scaleWidth,
    scaleHeight: themeContext.scaleHeight,
  };
};
