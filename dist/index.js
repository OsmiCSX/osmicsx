"use strict";
/**
 * @osmicsx/core
 *
 * (c) Rully Ardiansyah <de.voresyah@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OsmiProvider = exports.scaleHeight = exports.scaleWidth = exports.apply = void 0;
// Import Scale Utility
const responsive_1 = require("./lib/responsive");
Object.defineProperty(exports, "scaleWidth", { enumerable: true, get: function () { return responsive_1.scaleWidth; } });
Object.defineProperty(exports, "scaleHeight", { enumerable: true, get: function () { return responsive_1.scaleHeight; } });
// Import Provider
const provider_1 = __importDefault(require("./core/provider"));
exports.OsmiProvider = provider_1.default;
// Import apply() helper
const apply_1 = __importDefault(require("./core/apply"));
exports.apply = apply_1.default;
//# sourceMappingURL=index.js.map