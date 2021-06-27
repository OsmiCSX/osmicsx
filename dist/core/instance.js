"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import pre-defined styles
const map_1 = __importDefault(require("../predefined/map"));
// responsive module
const responsive_1 = require("../lib/responsive");
// import dark theme processor
const darkThemeProcessor_1 = __importDefault(require("../processor/darkThemeProcessor"));
// import opacity processing
const opacityProcessor_1 = __importDefault(require("../processor/opacityProcessor"));
class Instance {
    constructor(customStyle) {
        this._predefined = customStyle ? customStyle : map_1.default;
        this._obj = {};
        this._bgOpacity = 100;
        this._borderOpacity = 100;
        this._textOpacity = 100;
        this._bgDark = undefined;
        this._borderDark = undefined;
        this._textDark = undefined;
    }
    updateObject(data) {
        this._obj = Object.assign(Object.assign({}, this._obj), data);
    }
    /**
     * Get pre defined styles from osmicsx
     * @param data
     */
    predefinedStyles(data) {
        this.updateObject(this._predefined[data]);
    }
    /**
     * Check if the width & height are
     * responsive or not
     * @param data
     */
    responsiveSize(data) {
        if (data.includes("/")) {
            this.updateObject(responsive_1.convertResponsive(data.split("/")));
        }
    }
    /**
     * Auto generate fixed width size
     * @param data
     */
    fixedWidthSize(data) {
        if (data.includes("w-")) {
            this.updateObject({
                width: Number(data.replace("w-", ""))
            });
        }
    }
    /**
     * Auto generate fixed height size
     * @param data
     */
    fixedHeightSize(data) {
        if (data.includes("h-")) {
            this.updateObject({
                height: Number(data.replace("h-", ""))
            });
        }
    }
    /**
     * Checking if there's a color opacity
     * @param syntax
     */
    colorOpacity(syntax) {
        if (/(bg|text|border)-opacity-([0-9]{1,3}$)/.test(syntax)) {
            const extractOpacity = syntax.split("-opacity-");
            switch (extractOpacity[0]) {
                case "bg":
                    this._bgOpacity = Number(extractOpacity[1]);
                    break;
                case "border":
                    this._borderOpacity = Number(extractOpacity[1]);
                    break;
                case "text":
                    this._textOpacity = Number(extractOpacity[1]);
                    break;
            }
        }
    }
    /**
     * Checking if it's using dark mode or not
     * @param syntax
     */
    darkTheme(syntax) {
        if (syntax.includes("dark")) {
            const extractColor = syntax.replace("dark:", "");
            if (syntax.includes("dark:bg-")) {
                this._bgDark = this._predefined[extractColor];
            }
            if (syntax.includes("dark:border-")) {
                this._borderDark = this._predefined[extractColor];
            }
            if (syntax.includes("dark:text-")) {
                this._textDark = this._predefined[extractColor];
            }
        }
    }
    get predefined() {
        return this._predefined;
    }
    /**
     * Get final style data
     * @returns {*|{}}
     */
    getOutputStyle() {
        this._obj = darkThemeProcessor_1.default(this._obj, this._bgDark, this._borderDark, this._textDark);
        return opacityProcessor_1.default(this._obj, this._bgOpacity, this._borderOpacity, this._textOpacity);
    }
}
exports.default = Instance;
//# sourceMappingURL=instance.js.map