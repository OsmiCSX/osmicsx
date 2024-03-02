// Color Processor
import { customColors } from "./colors";

// Spacings Processor
import { customSpacings } from "./spacings";

// Border Processor
import { customBorders } from "./borders";

// Fonts Processor
import { customFonts } from "./fonts";

// Line Heights Processor
import { customLineHeights } from "./lineHeights";

// Letter Spacing Processor
import { customLetterSpacings } from "./letterSpacings";

// Shadows Processor
import { customShadows } from "./shadows";

// Gaps Processor
import { customGaps } from "./gaps";

// import type
import { CustomThemeType } from "../types/osmi.types";

// Processor to generate Custom Theme into Pre-defined Styles
export const customProcessor = (
  customTheme: CustomThemeType
): Record<string, string | object> => {
  const processors: Record<
    keyof CustomThemeType,
    (themeValue: any) => Record<string, unknown>
  > = {
    colors: customColors,
    spacing: customSpacings,
    border: customBorders,
    font: customFonts,
    lineHeight: customLineHeights,
    letterSpacing: customLetterSpacings,
    shadow: customShadows,
    gap: customGaps
  };

  return Object.entries(processors).reduce<Record<string, any>>(
    (finalObject, [key, processor]) => {
      if (key in customTheme) {
        const themeValue = customTheme[key as keyof CustomThemeType];
        if (themeValue) {
          finalObject = {
            ...finalObject,
            ...processor(themeValue),
          };
        }
      }
      return finalObject;
    },
    {}
  );
};
