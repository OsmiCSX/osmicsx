import { CustomGap } from "../types/osmi.types";

export const customGaps = (data: CustomGap): Record<string, any> => {
  const gapStyles: Record<string, any> = {};

  Object.entries(data).forEach(([key, value]) => {
    const val = typeof value === "number" ? value : parseInt(value, 10);
    
    gapStyles[`gap-${key}`] = { gap: val };
    gapStyles[`gap-x-${key}`] = { columnGap: val };
    gapStyles[`gap-y-${key}`] = { rowGap: val };
  });
  return gapStyles;
};
