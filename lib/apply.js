import map from "../data/map";

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
  } else {
    const arrStyle = arguments[0].split(" ")

    arrStyle.map((item) => {
      obj = {
        ...obj,
        ...map[item]
      }
    })
  }

  return obj
}

export default apply
