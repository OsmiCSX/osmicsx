"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Colors
const colors = __importStar(require("./colors.json"));
// Spacing
const padding = __importStar(require("./padding.json"));
const margin = __importStar(require("./margin.json"));
// Typography
const text_color_1 = __importDefault(require("./text-color"));
const textSize = __importStar(require("./text-size.json"));
const text_responsive_1 = __importDefault(require("./text-responsive"));
const textAlign = __importStar(require("./text-align.json"));
const textStyle = __importStar(require("./text-style.json"));
const textTransform = __importStar(require("./text-transform.json"));
const letterSpacing = __importStar(require("./letter-spacing.json"));
const lineHeight = __importStar(require("./line-height.json"));
const verticalAlign = __importStar(require("./vertical-align.json"));
// Background Color
const background_color_1 = __importDefault(require("./background-color"));
// Flex
const flex = __importStar(require("./flex.json"));
const flexWrap = __importStar(require("./flex-wrap.json"));
const flexDirection = __importStar(require("./flex-direction.json"));
const flexGrow = __importStar(require("./flex-grow.json"));
const flexShrink = __importStar(require("./flex-shrink.json"));
const alignItems = __importStar(require("./align-items.json"));
const alignContent = __importStar(require("./align-content.json"));
const alignSelf = __importStar(require("./align-self.json"));
const justifyContent = __importStar(require("./justify-content.json"));
// Border
const border_color_1 = __importDefault(require("./border-color"));
const borderStyle = __importStar(require("./border-style.json"));
const borderWidth = __importStar(require("./border-width.json"));
const borderRadius = __importStar(require("./border-radius.json"));
// Effect
const shadow = __importStar(require("./shadow.json"));
const opacity = __importStar(require("./opacity.json"));
// Transform
const rotate = __importStar(require("./rotate.json"));
// Position
const position = __importStar(require("./position.json"));
// Overflow
const overflow = __importStar(require("./overflow.json"));
// Resize (only for image)
const resizeMode = __importStar(require("./resize-mode.json"));
// Inset
const trbl = __importStar(require("./trbl.json"));
// Z-Index
const zIndex = __importStar(require("./z-index.json"));
/**
 * Mapping all styles
 */
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, colors), padding), margin), textSize), text_responsive_1.default), text_color_1.default), textAlign), textStyle), textTransform), letterSpacing), lineHeight), verticalAlign), background_color_1.default), flex), flexWrap), flexDirection), flexGrow), flexShrink), alignItems), alignContent), alignSelf), justifyContent), border_color_1.default), borderStyle), borderWidth), borderRadius), shadow), opacity), rotate), position), overflow), resizeMode), trbl), zIndex);
//# sourceMappingURL=map.js.map