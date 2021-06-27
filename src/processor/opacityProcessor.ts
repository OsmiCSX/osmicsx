// Processor to replace --osmi-opacity with custom opacity if exists
export default (styles: object, bgOpacity: number, borderOpacity: number, textOpacity: number): object => {
  let processedObject = {}

  Object.entries(styles).map(([key, value]) => {
    switch (key) {
      case "backgroundColor":
        processedObject = {
          ...processedObject,
          [key]: value.includes("--osmi-opacity") ?
            value.replace("--osmi-opacity", (Number(bgOpacity) / 100)) :
            value
        }
        break;

      case "borderColor":
        processedObject = {
          ...processedObject,
          [key]: value.includes("--osmi-opacity") ?
            value.replace("--osmi-opacity", (Number(borderOpacity) / 100)) :
            value
        }
        break;

      case "color":
        processedObject = {
          ...processedObject,
          [key]: value.includes("--osmi-opacity") ?
            value.replace("--osmi-opacity", (Number(textOpacity) / 100)) :
            value
        }
        break;

      default:
        processedObject = {
          ...processedObject,
          [key]: value
        }
        break;
    }
  })

  return processedObject
}
