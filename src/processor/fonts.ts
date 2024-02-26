// import type
import { CustomFonts } from "../types/osmi.types";

// custom fonts processor
export const customFonts = (fonts: CustomFonts): Record<string, any> => {
  const fontStyles: Record<string, any> = {};

  // mapping font family
  Object.entries(fonts.family || {}).forEach(([key, value]) => {
    fontStyles[`font-${key}`] = { fontFamily: value };
  });

  // mapping font size
  Object.entries(fonts.size || {}).forEach(([key, value]) => {
    fontStyles[`text-${key}`] = { fontSize: value };
  });

  return fontStyles;
};
