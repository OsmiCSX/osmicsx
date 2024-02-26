import { CustomSpacing } from "../types/osmi.types";

export const customSpacings = (data: CustomSpacing): Record<string, any> => {
  const spacingStyles: Record<string, any> = {};

  Object.entries(data).forEach(([key, value]) => {
    const valueNumber = typeof value === "number" ? value : parseInt(value, 10);
    const negativeValue = -Math.abs(valueNumber);

    const keys = [
      "p",
      "py",
      "px",
      "pt",
      "pr",
      "pb",
      "pl",
      "m",
      "my",
      "mx",
      "mt",
      "mr",
      "mb",
      "ml",
      "inset",
      "inset-y",
      "inset-x",
      "top",
      "right",
      "bottom",
      "left",
    ];

    keys.forEach((k) => {
      spacingStyles[`${k}-${key}`] = k.includes("p")
        ? { padding: valueNumber }
        : k.includes("m")
        ? { margin: valueNumber }
        : k.includes("inset")
        ? {
            top: valueNumber,
            right: valueNumber,
            bottom: valueNumber,
            left: valueNumber,
          }
        : k.includes("y")
        ? { paddingTop: valueNumber, paddingBottom: valueNumber }
        : k.includes("x")
        ? { paddingLeft: valueNumber, paddingRight: valueNumber }
        : k.includes("t")
        ? { paddingTop: valueNumber }
        : k.includes("r")
        ? { paddingRight: valueNumber }
        : k.includes("b")
        ? { paddingBottom: valueNumber }
        : { paddingLeft: valueNumber }; // 'left' and 'pl'

      spacingStyles[`-${k}-${key}`] = k.includes("p")
        ? { padding: negativeValue }
        : k.includes("m")
        ? { margin: negativeValue }
        : k.includes("inset")
        ? {
            top: negativeValue,
            right: negativeValue,
            bottom: negativeValue,
            left: negativeValue,
          }
        : k.includes("y")
        ? { paddingTop: negativeValue, paddingBottom: negativeValue }
        : k.includes("x")
        ? { paddingLeft: negativeValue, paddingRight: negativeValue }
        : k.includes("t")
        ? { paddingTop: negativeValue }
        : k.includes("r")
        ? { paddingRight: negativeValue }
        : k.includes("b")
        ? { paddingBottom: negativeValue }
        : { paddingLeft: negativeValue }; // 'left' and 'pl'
    });
  });

  return spacingStyles;
};
