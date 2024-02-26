import { CustomShadow } from "../types/osmi.types";

export const customShadows = (data: CustomShadow): Record<string, string> => {
  return Object.entries(data).reduce(
    (shadow, [key, value]) => ({
      ...shadow,
      [`shadow-${key}`]: value,
    }),
    {}
  );
};
