import React, { useMemo } from "react";
import { OsmiContext } from "./context";
import { applyHelper } from "./apply";
import { colorHelper } from "./color";
import type { NamedStyles, ApplyInstance } from "../types/osmi.types";

export const useStyles = (): ApplyInstance => {
  const themeContext = React.useContext(OsmiContext);

  if (themeContext === null) {
    throw new Error("You must wrap your components in a OsmiProvider.");
  }

  const apply = useMemo(
    () =>
      <T extends NamedStyles<T> | NamedStyles<any>>(
        ...args: (boolean | string | undefined)[]
      ) =>
        applyHelper(...args)(themeContext),
    [themeContext]
  );

  const colors = useMemo(
    () =>
      <T,>(...args: (string | boolean | undefined)[]): T => {
        if (args.length === 1) {
          return colorHelper(args[0] as string)(themeContext) as T;
        } else if (args.length === 2) {
          return args.map((syntax) =>
            colorHelper(syntax as string)(themeContext)
          ) as unknown as T;
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
