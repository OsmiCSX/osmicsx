"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import lib converter
const hexToRGBA_1 = __importDefault(require("../lib/hexToRGBA"));
// custom colors processor
const customColors = (data) => {
    let colorStyles = {};
    Object.entries(data).map(([key, value]) => {
        const fixedColor = value.includes("#") ? hexToRGBA_1.default(value) : value;
        colorStyles = Object.assign(Object.assign({}, colorStyles), { [key]: fixedColor, [`bg-${key}`]: { backgroundColor: fixedColor }, [`border-${key}`]: { borderColor: fixedColor }, [`text-${key}`]: { color: fixedColor } });
    });
    return colorStyles;
};
// custom spacings processor
const customSpacings = (data) => {
    let spacingStyles = {};
    Object.entries(data).map(([key, value]) => {
        spacingStyles = Object.assign(Object.assign({}, spacingStyles), { [`p-${key}`]: { padding: value }, [`py-${key}`]: { paddingTop: value, paddingBottom: value }, [`px-${key}`]: { paddingLeft: value, paddingRight: value }, [`pt-${key}`]: { paddingTop: value }, [`pr-${key}`]: { paddingRight: value }, [`pb-${key}`]: { paddingBottom: value }, [`pl-${key}`]: { paddingLeft: value }, [`m-${key}`]: { margin: value }, [`my-${key}`]: { marginTop: value, marginBottom: value }, [`mx-${key}`]: { marginLeft: value, marginRight: value }, [`mt-${key}`]: { marginTop: value }, [`mr-${key}`]: { marginRight: value }, [`mb-${key}`]: { marginBottom: value }, [`ml-${key}`]: { marginLeft: value }, [`-p-${key}`]: { padding: -(value) }, [`-py-${key}`]: { paddingTop: -(value), paddingBottom: -(value) }, [`-px-${key}`]: { paddingLeft: -(value), paddingRight: -(value) }, [`-pt-${key}`]: { paddingTop: -(value) }, [`-pr-${key}`]: { paddingRight: -(value) }, [`-pb-${key}`]: { paddingBottom: -(value) }, [`-pl-${key}`]: { paddingLeft: -(value) }, [`-m-${key}`]: { margin: -(value) }, [`-my-${key}`]: { marginTop: -(value), marginBottom: -(value) }, [`-mx-${key}`]: { marginLeft: -(value), marginRight: -(value) }, [`-mt-${key}`]: { marginTop: -(value) }, [`-mr-${key}`]: { marginRight: -(value) }, [`-mb-${key}`]: { marginBottom: -(value) }, [`-ml-${key}`]: { marginLeft: -(value) }, [`inset-${key}`]: { top: value, right: value, bottom: value, left: value }, [`inset-y-${key}`]: { top: value, bottom: value }, [`inset-x-${key}`]: { right: value, left: value }, [`top-${key}`]: { top: value }, [`right-${key}`]: { right: value }, [`bottom-${key}`]: { bottom: value }, [`left-${key}`]: { left: value }, [`-top-${key}`]: { top: -(value) }, [`-right-${key}`]: { right: -(value) }, [`-bottom-${key}`]: { bottom: -(value) }, [`-left-${key}`]: { left: -(value) } });
    });
    return spacingStyles;
};
// custom borders processor
const customBorders = (data) => {
    let borderStyles = {};
    if (data === null || data === void 0 ? void 0 : data.width) {
        Object.entries(data).map(([key, value]) => {
            borderStyles = Object.assign(Object.assign({}, borderStyles), { [`border-${key}`]: { borderWidth: value }, [`border-t-${key}`]: { borderTopWidth: value }, [`border-r-${key}`]: { borderRightWidth: value }, [`border-b-${key}`]: { borderBottomWidth: value }, [`border-l-${key}`]: { borderLeftWidth: value } });
        });
    }
    if (data === null || data === void 0 ? void 0 : data.radius) {
        Object.entries(data).map(([key, value]) => {
            borderStyles = Object.assign(Object.assign({}, borderStyles), { [`rounded-${key}`]: { borderRadius: value }, [`rounded-t-${key}`]: { borderTopLeftRadius: value, borderTopRightRadius: value }, [`rounded-r-${key}`]: { borderTopRightRadius: value, borderBottomRightRadius: value }, [`rounded-b-${key}`]: { borderBottomRightRadius: value, borderBottomLeftRadius: value }, [`rounded-l-${key}`]: { borderBottomLeftRadius: value, borderTopLeftRadius: value }, [`rounded-tl-${key}`]: { borderTopLeftRadius: value }, [`rounded-tr-${key}`]: { borderTopRightRadius: value }, [`rounded-br-${key}`]: { borderBottomRightRadius: value }, [`rounded-bl-${key}`]: { borderBottomLeftRadius: value } });
        });
    }
    return borderStyles;
};
// custom fonts processor
const customFonts = (object) => {
    let fontStyles = {};
    // mapping font family
    if (object === null || object === void 0 ? void 0 : object.family) {
        Object.entries(object === null || object === void 0 ? void 0 : object.family).map(([key, value]) => {
            fontStyles = Object.assign(Object.assign({}, fontStyles), { [`font-${key}`]: { fontFamily: value } });
        });
    }
    // mapping font size
    if (object === null || object === void 0 ? void 0 : object.size) {
        Object.entries(object === null || object === void 0 ? void 0 : object.size).map(([key, value]) => {
            fontStyles = Object.assign(Object.assign({}, fontStyles), { [`font-${key}`]: { fontSize: value } });
        });
    }
    return fontStyles;
};
// Processor to generate Custom Theme into Pre-defined Styles
exports.default = (customTheme) => {
    let finalObject = {};
    // mapping colors
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.colors) {
        finalObject = Object.assign(Object.assign({}, finalObject), customColors(customTheme === null || customTheme === void 0 ? void 0 : customTheme.colors));
    }
    // mapping spacing
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.spacing) {
        finalObject = Object.assign(Object.assign({}, finalObject), customSpacings(customTheme === null || customTheme === void 0 ? void 0 : customTheme.spacing));
    }
    // mapping borders
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.border) {
        finalObject = Object.assign(Object.assign({}, finalObject), customBorders(customTheme === null || customTheme === void 0 ? void 0 : customTheme.border));
    }
    // mapping font family & size
    if (customTheme === null || customTheme === void 0 ? void 0 : customTheme.font) {
        finalObject = Object.assign(Object.assign({}, finalObject), customFonts(customTheme === null || customTheme === void 0 ? void 0 : customTheme.font));
    }
    return finalObject;
};
//# sourceMappingURL=multiThemeProcessor.js.map