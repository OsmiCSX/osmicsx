import map from "../data/map";

/**
 * Helper function for group styling
 */
function apply() {
  let obj = {};

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
}

export default apply
