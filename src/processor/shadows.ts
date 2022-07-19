// import type
import { CustomShadow } from "../types/osmi.types";

// custom shadow processor
export const customShadows = (data: CustomShadow): object => {
  let shadow: object = {};

  // mapping shadow
  Object.entries(data).map(([key, value]): void => {
    shadow = {
      ...shadow,
      [`shadow-${key}`]: value,
    };
  });

  return shadow;
};
