"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const instance_1 = __importDefault(require("./instance"));
/**
 * Helper function for group styling
 */
const apply = (args) => {
    const instanceStyle = new instance_1.default();
    const arrStyle = args.split(" ");
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
        if (typeof instanceStyle.predefined[arrStyle[0]] === "string") {
            return instanceStyle.predefined[arrStyle[0]].replace("--osmi-opacity", 1);
        }
        else {
            return instanceStyle.getOutputStyle();
        }
    }
    else {
        return instanceStyle.getOutputStyle();
    }
};
exports.default = apply;
//# sourceMappingURL=apply.js.map