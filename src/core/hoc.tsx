import React, { useContext, useCallback } from "react";
import { OsmiContext } from "./context";
import { applyHelper } from "./apply";
import { colorHelper } from "./color";

import type { NamedStyles, ApplyInstance } from "../types/osmi.types";

export const withStyles =
  <P extends ApplyInstance = ApplyInstance>(
    Component: React.ComponentType<P>
  ): React.FC<Omit<P, keyof ApplyInstance>> =>
  (props) => {
    const themeContext = useContext(OsmiContext);

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
      (...args: (string | boolean | undefined)[]): string | string[] => {
        if (args.length === 1) {
          if (args[0] !== false && args[0] !== undefined) {
            return colorHelper(args[0] as string)(themeContext);
          }

          return "";
        } else if (args.length === 2) {
          return args.map((syntax) =>
            syntax !== false && syntax !== undefined
              ? colorHelper(syntax)(themeContext)
              : ""
          );
        } else {
          throw Error("Invalid color syntax");
        }
      },
      [themeContext]
    );

    return (
      <Component
        {...(props as P)}
        apply={apply}
        colors={colors}
        scaleWidth={themeContext.scaleWidth}
        scaleHeight={themeContext.scaleHeight}
        switchTheme={themeContext.switchMode}
      />
    );
  };
