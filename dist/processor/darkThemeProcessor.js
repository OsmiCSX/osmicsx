"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
// Processor to detect and replace if it's using dark theme
exports.default = (styles, bgDark, borderDark, textDark) => {
    let processedStyle = styles;
    // only repalce if color scheme is dark
    if (react_native_1.useColorScheme() === "dark") {
        if (bgDark) {
            processedStyle = Object.assign(Object.assign({}, processedStyle), { backgroundColor: bgDark["backgroundColor"] });
        }
        if (borderDark) {
            processedStyle = Object.assign(Object.assign({}, processedStyle), { borderColor: borderDark["borderColor"] });
        }
        if (textDark) {
            processedStyle = Object.assign(Object.assign({}, processedStyle), { color: textDark["color"] });
        }
    }
    return processedStyle;
};
//# sourceMappingURL=darkThemeProcessor.js.map