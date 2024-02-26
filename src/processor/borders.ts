// import type
import { CustomBorder } from "../types/osmi.types";

// custom borders processor
export const customBorders = (data: CustomBorder): Record<string, any> => {
  let borderStyles: Record<string, any> = {};

  // mapping border size
  Object.entries(data.width || {}).forEach(([key, value]) => {
    borderStyles[`border-${key}`] = { borderWidth: value };
    borderStyles[`border-t-${key}`] = { borderTopWidth: value };
    borderStyles[`border-r-${key}`] = { borderRightWidth: value };
    borderStyles[`border-b-${key}`] = { borderBottomWidth: value };
    borderStyles[`border-l-${key}`] = { borderLeftWidth: value };
  });

  // mapping border radius
  Object.entries(data.radius || {}).forEach(([key, value]) => {
    borderStyles[`rounded-${key}`] = { borderRadius: value };
    borderStyles[`rounded-t-${key}`] = {
      borderTopLeftRadius: value,
      borderTopRightRadius: value,
    };
    borderStyles[`rounded-r-${key}`] = {
      borderTopRightRadius: value,
      borderBottomRightRadius: value,
    };
    borderStyles[`rounded-b-${key}`] = {
      borderBottomRightRadius: value,
      borderBottomLeftRadius: value,
    };
    borderStyles[`rounded-l-${key}`] = {
      borderBottomLeftRadius: value,
      borderTopLeftRadius: value,
    };
    borderStyles[`rounded-tl-${key}`] = { borderTopLeftRadius: value };
    borderStyles[`rounded-tr-${key}`] = { borderTopRightRadius: value };
    borderStyles[`rounded-br-${key}`] = { borderBottomRightRadius: value };
    borderStyles[`rounded-bl-${key}`] = { borderBottomLeftRadius: value };
  });

  return borderStyles;
};
