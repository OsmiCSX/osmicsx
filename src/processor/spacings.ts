// import type
import { CustomSpacing } from "../types/osmi.types";

// custom spacings processor
export const customSpacings = (data: CustomSpacing): object => {
  let spacingStyles: object = {};

  // mapping spacing
  Object.entries(data).map(([key, value]): void => {
    const negativeValue: number =
      (value as number) < 0 ? (value as number) * -1 : (value as number);

    spacingStyles = {
      ...spacingStyles,
      [`p-${key}`]: { padding: value },
      [`py-${key}`]: { paddingTop: value, paddingBottom: value },
      [`px-${key}`]: { paddingLeft: value, paddingRight: value },
      [`pt-${key}`]: { paddingTop: value },
      [`pr-${key}`]: { paddingRight: value },
      [`pb-${key}`]: { paddingBottom: value },
      [`pl-${key}`]: { paddingLeft: value },
      [`m-${key}`]: { margin: value },
      [`my-${key}`]: { marginTop: value, marginBottom: value },
      [`mx-${key}`]: { marginLeft: value, marginRight: value },
      [`mt-${key}`]: { marginTop: value },
      [`mr-${key}`]: { marginRight: value },
      [`mb-${key}`]: { marginBottom: value },
      [`ml-${key}`]: { marginLeft: value },
      [`-p-${key}`]: { padding: negativeValue },
      [`-py-${key}`]: {
        paddingTop: negativeValue,
        paddingBottom: negativeValue,
      },
      [`-px-${key}`]: {
        paddingLeft: negativeValue,
        paddingRight: negativeValue,
      },
      [`-pt-${key}`]: { paddingTop: negativeValue },
      [`-pr-${key}`]: { paddingRight: negativeValue },
      [`-pb-${key}`]: { paddingBottom: negativeValue },
      [`-pl-${key}`]: { paddingLeft: negativeValue },
      [`-m-${key}`]: { margin: negativeValue },
      [`-my-${key}`]: { marginTop: negativeValue, marginBottom: negativeValue },
      [`-mx-${key}`]: { marginLeft: negativeValue, marginRight: negativeValue },
      [`-mt-${key}`]: { marginTop: negativeValue },
      [`-mr-${key}`]: { marginRight: negativeValue },
      [`-mb-${key}`]: { marginBottom: negativeValue },
      [`-ml-${key}`]: { marginLeft: negativeValue },
      [`inset-${key}`]: {
        top: value,
        right: value,
        bottom: value,
        left: value,
      },
      [`inset-y-${key}`]: { top: value, bottom: value },
      [`inset-x-${key}`]: { right: value, left: value },
      [`top-${key}`]: { top: value },
      [`right-${key}`]: { right: value },
      [`bottom-${key}`]: { bottom: value },
      [`left-${key}`]: { left: value },
      [`-inset-${key}`]: {
        top: negativeValue,
        right: negativeValue,
        bottom: negativeValue,
        left: negativeValue,
      },
      [`-inset-y-${key}`]: { top: negativeValue, bottom: negativeValue },
      [`-inset-x-${key}`]: { right: negativeValue, left: negativeValue },
      [`-top-${key}`]: { top: negativeValue },
      [`-right-${key}`]: { right: negativeValue },
      [`-bottom-${key}`]: { bottom: negativeValue },
      [`-left-${key}`]: { left: negativeValue },
    };
  });

  return spacingStyles;
};
