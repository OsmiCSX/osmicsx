/**
 * Detect osmi style and Convert it into Width / Heihgt / Font Size as percentage
 * @param {array} array from split string "%" with type and value
 * @return {object} object style width / height / font size
 */
export const convertPercentage = ([type, value]: string[]): object | undefined => {
  switch(type) {
    case "w":
      return {
        width: `${value}%`
      }

    case "h":
      return {
        height: `${value}%`
      }

    case "text":
      return {
        fontSize: `${value}%`
      }

    case "min-w":
      return {
        minWidth: `${value}%`
      }

    case "min-h":
      return {
        minHeight: `${value}%`
      }

    case "max-w":
      return {
        maxWidth: `${value}%`
      }

    case "max-h":
      return {
        maxHeight: `${value}%`
      }

    default:
      console.warn(`OsmiCSX Percentage: Undefined type of ${type}}`)
      return undefined
  }
}