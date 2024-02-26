import React, { useContext, useMemo } from "react";
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

      const { scaleWidth, scaleHeight, switchMode } = themeContext;

      const apply = useMemo(
        () =>
          <T extends NamedStyles<T> | NamedStyles<any>>(...args: (string | boolean | undefined)[]) =>
            applyHelper(...args)(themeContext)
        ,
        [themeContext]
      );

      const colors = useMemo(
        () =>
          (...args: (string | boolean | undefined)[]): string | string[] => {
            if (args.length === 1) {
              const arg = args[0];
              return arg !== false && arg !== undefined ? colorHelper(arg)(themeContext) : "";
            } else if (args.length === 2) {
              return args.map(arg => arg !== false && arg !== undefined ? colorHelper(arg)(themeContext) : "");
            }
            throw Error("Invalid color syntax");
          }
        ,
        [themeContext]
      );

      return (
        <Component
          {...(props as P)}
          apply={apply}
          colors={colors}
          scaleWidth={scaleWidth}
          scaleHeight={scaleHeight}
          switchTheme={switchMode}
        />
      );
    };
