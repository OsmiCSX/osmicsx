import { Instance } from "./instance";
import type { NamedStyles, OsmiContextInstance } from "../types/osmi.types";

export const applyHelper =
  <T extends NamedStyles<T> | NamedStyles<any>>(
    ...args: (boolean | string | undefined)[]
  ) =>
  (themeContext: OsmiContextInstance | null): any[] => {
    const outputStyles: object[] = [];

    try {
      // Get syntax from each args
      for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg !== false && arg !== undefined && typeof arg === 'string') {
          // Init instance
          const instanceStyle = new Instance(themeContext?.theme);

          // Get syntax list from each args
          const syntaxList: string[] = arg.split(" ");
          const defaultSyntax: string[] = syntaxList.filter(
            (item: string) => !item.includes("dark:") && !item.includes("notch:") &&
                      !item.includes("android:") && !item.includes("ios:")
          );

          defaultSyntax.forEach((syntax: string) => {
            instanceStyle.applyStyles(syntax);
          });

          // Apply platform and mode specific styles, these will overwrite the default styles
          syntaxList.forEach((syntax: string) => {
            if (syntax.includes("android:") || syntax.includes("ios:") ||
                syntax.includes("notch:") || syntax.includes("dark:")) {
              instanceStyle.applyStyles(syntax.replace(/(android:|ios:|notch:|dark:)/, ""));
            }
          });

          outputStyles.push(instanceStyle.getOutputStyle());
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error in applyHelper: ${error.message}`);
      } else {
        console.error(`An unknown error occurred in applyHelper`);
      }
    }

    return outputStyles as any[];
  };

