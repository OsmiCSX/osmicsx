// import type
import { CustomLineHeight } from "../types/osmi.types";

// custom line height processor
export const customLineHeights = (data: CustomLineHeight): object => {
  let lineHeights: object = {};

  // mapping line height
  Object.entries(data).map(([key, value]): void => {
    lineHeights = {
      ...lineHeights,
      [`leading-${key}`]: { lineHeight: value },
    };
  });

  return lineHeights;
};
