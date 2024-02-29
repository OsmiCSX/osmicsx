import { useContext, useMemo } from "react";
import { OsmiContext } from "./context";
import { applyHelper } from "./apply";
import { colorHelper } from "./color";

// Types
import type { FC, ComponentType } from "react";
import type { NamedStyles, ApplyInstance } from "../types/osmi.types";

export const withStyles =
  <P extends ApplyInstance = ApplyInstance>(
    Component: ComponentType<P>
  ): FC<Omit<P, keyof ApplyInstance>> =>
  (props: Omit<P, keyof ApplyInstance>) => {
    const themeContext = useContext(OsmiContext);

    if (themeContext === null) {
      throw new Error("You must wrap your components in a OsmiProvider.");
    }

    const { scaleWidth, scaleHeight, switchMode } = themeContext;

    const apply = useMemo(
      () =>
        <T extends NamedStyles<T> | NamedStyles<any>>(
          ...args: (string | boolean | undefined)[]
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
            ) as T;
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
        scaleWidth={scaleWidth}
        scaleHeight={scaleHeight}
        switchTheme={switchMode}
      />
    );
  };
