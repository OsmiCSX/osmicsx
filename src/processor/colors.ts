import hexToRGBA from "../lib/hexToRGBA";
import { CustomColors } from "../types/osmi.types";

export const customColors = (
  data: CustomColors
): Record<string, string | object> => {
  return Object.entries(data).reduce<Record<string, string | object>>(
    (colorStyles, [key, value]) => {
      const fixedColor = value.startsWith("#") ? hexToRGBA(value) : value;

      colorStyles[key] = fixedColor;
      colorStyles[`bg-${key}`] = { backgroundColor: fixedColor };
      colorStyles[`border-${key}`] = { borderColor: fixedColor };
      colorStyles[`text-${key}`] = { color: fixedColor };

      return colorStyles;
    },
    {}
  );
};
