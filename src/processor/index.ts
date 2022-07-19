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

// import type
import { CustomThemeType } from "../types/osmi.types";

// Processor to generate Custom Theme into Pre-defined Styles
export const customProcessor = (customTheme: CustomThemeType): object => {
  let finalObject: object = {};

  // mapping colors
  if (customTheme?.colors) {
    finalObject = {
      ...finalObject,
      ...customColors(customTheme?.colors),
    };
  }

  // mapping spacing
  if (customTheme?.spacing) {
    finalObject = {
      ...finalObject,
      ...customSpacings(customTheme?.spacing),
    };
  }

  // mapping borders
  if (customTheme?.border) {
    finalObject = {
      ...finalObject,
      ...customBorders(customTheme?.border),
    };
  }

  // mapping font family & size
  if (customTheme?.font) {
    finalObject = {
      ...finalObject,
      ...customFonts(customTheme?.font),
    };
  }

  // mapping line heights
  if (customTheme?.lineHeight) {
    finalObject = {
      ...finalObject,
      ...customLineHeights(customTheme?.lineHeight),
    };
  }

  // mapping letter spacing
  if (customTheme?.letterSpacing) {
    finalObject = {
      ...finalObject,
      ...customLetterSpacings(customTheme?.letterSpacing),
    };
  }

  // mapping shadow
  if (customTheme?.shadow) {
    finalObject = {
      ...finalObject,
      ...customShadows(customTheme?.shadow),
    };
  }

  return finalObject;
};
