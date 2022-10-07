// import type
import { CustomFonts } from "../types/osmi.types";

// custom fonts processor
export const customFonts = (object: CustomFonts): object => {
  let fontStyles: object = {};

  // mapping font family
  if (object?.family) {
    Object.entries(object?.family).map(([key, value]): void => {
      fontStyles = {
        ...fontStyles,
        [`font-${key}`]: { fontFamily: value },
      };
    });
  }

  // mapping font size
  if (object?.size) {
    Object.entries(object?.size).map(([key, value]): void => {
      fontStyles = {
        ...fontStyles,
        [`text-${key}`]: { fontSize: value },
      };
    });
  }

  return fontStyles;
};
