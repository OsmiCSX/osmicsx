// import type
import { CustomLineHeight } from "../types/osmi.types";

// custom line height processor
export const customLineHeights = (
  data: CustomLineHeight
): Record<string, { lineHeight: string | number }> => {
  return Object.entries(data).reduce(
    (lineHeights, [key, value]) => ({
      ...lineHeights,
      [`leading-${key}`]: { lineHeight: value },
    }),
    {}
  );
};
