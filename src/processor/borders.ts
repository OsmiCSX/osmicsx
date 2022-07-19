// import type
import { CustomBorder } from "../types/osmi.types";

// custom borders processor
export const customBorders = (data: CustomBorder): object => {
  let borderStyles: object = {};

  // mapping border size
  if (data?.width) {
    Object.entries(data.width).map(([key, value]): void => {
      borderStyles = {
        ...borderStyles,
        [`border-${key}`]: { borderWidth: value },
        [`border-t-${key}`]: { borderTopWidth: value },
        [`border-r-${key}`]: { borderRightWidth: value },
        [`border-b-${key}`]: { borderBottomWidth: value },
        [`border-l-${key}`]: { borderLeftWidth: value },
      };
    });
  }

  // mapping border radius
  if (data?.radius) {
    Object.entries(data.radius).map(([key, value]): void => {
      borderStyles = {
        ...borderStyles,
        [`rounded-${key}`]: { borderRadius: value },
        [`rounded-t-${key}`]: {
          borderTopLeftRadius: value,
          borderTopRightRadius: value,
        },
        [`rounded-r-${key}`]: {
          borderTopRightRadius: value,
          borderBottomRightRadius: value,
        },
        [`rounded-b-${key}`]: {
          borderBottomRightRadius: value,
          borderBottomLeftRadius: value,
        },
        [`rounded-l-${key}`]: {
          borderBottomLeftRadius: value,
          borderTopLeftRadius: value,
        },
        [`rounded-tl-${key}`]: { borderTopLeftRadius: value },
        [`rounded-tr-${key}`]: { borderTopRightRadius: value },
        [`rounded-br-${key}`]: { borderBottomRightRadius: value },
        [`rounded-bl-${key}`]: { borderBottomLeftRadius: value },
      };
    });
  }

  return borderStyles;
};
