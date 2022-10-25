// import type
import { CustomLetterSpacing } from "../types/osmi.types";

// custom letter spacing processor
export const customLetterSpacings = (data: CustomLetterSpacing): object => {
  let letterSpacing: object = {};

  // mapping letter spacing
  Object.entries(data).map(([key, value]): void => {
    letterSpacing = {
      ...letterSpacing,
      [`tracking-${key}`]: { letterSpacing: value },
    };
  });

  return letterSpacing;
};
