export const opacityProcessor = (
  styles: Record<string, string>,
  bgOpacity: number,
  borderOpacity: number,
  textOpacity: number
): Record<string, string> => {
  return Object.entries(styles).reduce((processedObject, [key, value]) => {
    let opacityValue;
    if (value.toString().includes("--osmi-opacity")) {
      switch (key) {
        case "backgroundColor":
          opacityValue = Number(bgOpacity) / 100;
          break;
        case "borderColor":
          opacityValue = Number(borderOpacity) / 100;
          break;
        case "color":
          opacityValue = Number(textOpacity) / 100;
          break;
      }
      value = value.replace("--osmi-opacity", `${opacityValue}`);
    }
    return { ...processedObject, [key]: value };
  }, {});
};
