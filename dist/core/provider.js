"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const map_1 = __importDefault(require("../predefined/map"));
const instance_1 = __importDefault(require("./instance"));
const multiThemeProcessor_1 = __importDefault(require("../processor/multiThemeProcessor"));
// Import Scale Utility
const responsive_1 = require("../lib/responsive");
/**
 * Create OsmiProvider for custom theme
 */
class OsmiProvider {
    constructor(customStyle) {
        this._predefined = customStyle ? Object.assign(Object.assign({}, map_1.default), multiThemeProcessor_1.default(customStyle)) : map_1.default;
        this.width = responsive_1.scaleWidth;
        this.height = responsive_1.scaleHeight;
    }
    // connect function for templating purpose
    connect(style) {
        let objStyle = {};
        Object.entries(style).forEach(([key, value]) => {
            const instanceStyle = new instance_1.default(this._predefined);
            value.split(" ").map((syntax) => {
                // check if width & size using responsive method or not
                instanceStyle.responsiveSize(syntax);
                // auto generate fixed width size
                instanceStyle.fixedWidthSize(syntax);
                // auto generate fixed width size
                instanceStyle.fixedHeightSize(syntax);
                // Check if there's coloring opacity
                instanceStyle.colorOpacity(syntax);
                // Check if there's any dark theme
                instanceStyle.darkTheme(syntax);
                // Generate from pre-defined styles
                instanceStyle.predefinedStyles(syntax);
            });
            objStyle[key] = instanceStyle.getOutputStyle();
        });
        return react_native_1.StyleSheet.create(objStyle);
    }
    ;
    // apply function for inline style
    apply() {
        const instanceStyle = new instance_1.default(this._predefined);
        const arrStyle = arguments[0].split(" ");
        arrStyle.map((syntax) => {
            // check if width & size using responsive method or not
            instanceStyle.responsiveSize(syntax);
            // auto generate fixed width size
            instanceStyle.fixedWidthSize(syntax);
            // auto generate fixed width size
            instanceStyle.fixedHeightSize(syntax);
            // Check if there's coloring opacity
            instanceStyle.colorOpacity(syntax);
            // Check if there's any dark theme
            instanceStyle.darkTheme(syntax);
            // Generate from pre-defined styles
            instanceStyle.predefinedStyles(syntax);
        });
        if (arrStyle.length === 1) {
            if (typeof this._predefined[arrStyle[0]] === "string") {
                return this._predefined[arrStyle[0]].replace("--osmi-opacity", 1);
            }
            else {
                return instanceStyle.getOutputStyle();
            }
        }
        else {
            return instanceStyle.getOutputStyle();
        }
    }
}
exports.default = OsmiProvider;
//# sourceMappingURL=provider.js.map