import map from "../data/map";
import { convertResponsive } from "./responsive"

/**
 * Helper function for group styling
 */
function apply() {
  let obj = {};

  if (arguments.length > 1) {
    console.warn("calling multiple style with , (comma) separator is deprecated and will be removed in the next OsmiCSX update.")

    for (let i=0; i<arguments.length; i++) {
      const item = arguments[i];

      if (typeof item === "string") {
        obj = {
          ...obj,
          ...map[item]
        }
      } else {
        obj = {
          ...obj,
          ...item
        }
      }
    }

    return obj
  } else {
    const arrStyle = arguments[0].split(" ")

    arrStyle.map((item) => {
      obj = item.includes("/") ?
        {
          ...obj,
          ...convertResponsive(item.split("/"))
        } :
        {
          ...obj,
          ...map[item]
        }
    })

    if (arrStyle.length === 1) {
      if (typeof map[arrStyle[0]] === "string") {
        return map[arrStyle[0]]
      } else {
        return obj
      }
    } else {
      return obj
    }
  }
}

export default apply
