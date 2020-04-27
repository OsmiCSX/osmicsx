/**
 * @osmicsx/core
 *
 * (c) Rully Ardiansyah <de.voresyah@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// Base Color
import colors from './data/colors.json'

// Import Scale Utility
import { scaleWidth, scaleHeight } from './lib/responsive';

// Import Provider
import OsmiProvider from './lib/provider'

// Import apply() helper
import apply from './lib/apply'

/**
 * Export helper method
 */
export {
  colors,
  apply,
  scaleWidth,
  scaleHeight,
  OsmiProvider
}
