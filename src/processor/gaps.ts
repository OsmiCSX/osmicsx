import { CustomGap } from "../types/osmi.types";

export const customGaps = (data: CustomGap): Record<string, any> => {
  return Object.entries(data).reduce(
    (gapStyles, [key, value]) => ({
      ...gapStyles,
      [`gap-${key}`]: { gap: value },
      [`gap-x-${key}`]: { columnGap: value },
      [`gap-y-${key}`]: { rowGap: value }
    }),
    {}
  );
};
