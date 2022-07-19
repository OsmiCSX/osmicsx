import React, { useContext, useCallback } from "react";
import { OsmiContext } from "./context";
import { applyHelper } from "./apply";
import type {
  NamedStyles,
  ApplyInstance,
  OsmiContextInstance,
} from "../types/osmi.types";

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

    return (
      <Component
        {...(props as P)}
        apply={apply}
        scaleWidth={themeContext.scaleWidth}
        scaleHeight={themeContext.scaleHeight}
        switchTheme={themeContext.switchMode}
      />
    );
  };
