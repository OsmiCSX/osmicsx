/**
 * @osmicsx/core
 *
 * (c) Rully Ardiansyah <de.voresyah@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// Base Color
import colors from './data/colors'

// Import Namespace Map
import map from './data/map'

// Import Scale Utility
import { scaleWidth, scaleHeight } from './src/scale';

// Import Provider
import OsmiProvider from './lib/provider'

/**
 * Font family helper
 */
const family = (name) => {
  console.warn("family method is deprecated and will be removed in the next OsmiCSX update.");

  return {
    fontFamily: name
  }
};

/**
 * Helper function for group styling
 */
const apply = (namespace) => {
  let obj = {};

  namespace.map((item) => {
    if (typeof item === "object") {
      obj = {
        ...obj,
        ...item
      }
    } else {
      obj = {
        ...obj,
        ...map[item]
      }
    }
  });

  return obj
};

/**
 * Default method for styling
 */
const styles = (namespace) => {
  console.warn("default method is deprecated and will be removed in the next OsmiCSX update.");

  let obj = {};

  if (Array.isArray(namespace)) {
    namespace.map((item) => {
      obj = {
        ...obj,
        ...map[item]
      }
    })
  } else {
    obj = map[namespace]
  }

  return obj
};

/**
 * Export helper method
 */
export {
  colors,
  apply,
  family,
  scaleWidth,
  scaleHeight,
  OsmiProvider
}

export default styles
