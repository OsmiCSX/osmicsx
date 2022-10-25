// import lib converter
import hexToRGBA from "../lib/hexToRGBA";

// import type
import { CustomColors } from "../types/osmi.types";

// custom colors processor
export const customColors = (data: CustomColors): object => {
  let colorStyles: object = {};

  // mapping colors
  Object.entries(data).map(([key, value]): void => {
    const fixedColor = value.includes("#") ? hexToRGBA(value) : value;

    colorStyles = {
      ...colorStyles,
      [key]: fixedColor,
      [`bg-${key}`]: { backgroundColor: fixedColor },
      [`border-${key}`]: { borderColor: fixedColor },
      [`text-${key}`]: { color: fixedColor },
    };
  });

  return colorStyles;
};
