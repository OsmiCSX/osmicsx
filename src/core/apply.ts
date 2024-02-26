import { Instance } from "./instance";
import type { NamedStyles, OsmiContextInstance } from "../types/osmi.types";

export const applyHelper =
  <T extends NamedStyles<T> | NamedStyles<any>>(
    ...args: (boolean | string | undefined)[]
  ) =>
  (themeContext: OsmiContextInstance | null): any[] => {
    const outputStyles: object[] = [];

    try {
      args.forEach((arg) => {
        if (typeof arg === "string") {
          const instanceStyle = new Instance(themeContext?.theme);
          const syntaxList = arg.split(" ");

          syntaxList.forEach((syntax) => {
            if (!syntax.includes(":")) {
              instanceStyle.applyStyles(syntax);
            }
          });

          const specificSyntax = syntaxList.filter((syntax) =>
            syntax.includes(":")
          );
          specificSyntax.forEach((syntax) => {
            instanceStyle.applyStyles(syntax.split(":")[1]);
            instanceStyle.darkTheme(syntax.split(":")[1], themeContext!.mode);
          });

          outputStyles.push(instanceStyle.getOutputStyle());
        }
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error in applyHelper: ${error.message}`);
      } else {
        console.error(`An unknown error occurred in applyHelper`);
      }
    }

    return outputStyles as any[];
  };
