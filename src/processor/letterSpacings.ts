import { CustomLetterSpacing } from "../types/osmi.types";

export const customLetterSpacings = (
  data: CustomLetterSpacing
): Record<string, { letterSpacing: string }> => {
  return Object.entries(data).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [`tracking-${key}`]: { letterSpacing: value },
    }),
    {}
  );
};
