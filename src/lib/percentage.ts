export type StyleType =
  | "w"
  | "h"
  | "text"
  | "min-w"
  | "min-h"
  | "max-w"
  | "max-h";

interface StyleObject {
  width?: string;
  height?: string;
  fontSize?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export const convertPercentage = ([type, value]: [StyleType, string]):
  | StyleObject
  | undefined => {
  const percentageValue = `${value}%`;
  switch (type) {
    case "w":
      return { width: percentageValue };
    case "h":
      return { height: percentageValue };
    case "text":
      return { fontSize: percentageValue };
    case "min-w":
      return { minWidth: percentageValue };
    case "min-h":
      return { minHeight: percentageValue };
    case "max-w":
      return { maxWidth: percentageValue };
    case "max-h":
      return { maxHeight: percentageValue };
    default:
      console.warn(`OsmiCSX Percentage: Undefined type of ${type}`);
      return undefined;
  }
};
