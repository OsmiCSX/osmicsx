// import pre-defined styles
import map from "../predefined/map";

// responsive module
import { convertResponsive } from "../lib/responsive";

// percentage
import { convertPercentage } from "../lib/percentage";

// import dark theme processor
import darkThemeProcessor from "../processor/darkThemeProcessor";

// import opacity processing
import opacityProcessor from "../processor/opacityProcessor";

import isDark from "../lib/darkThemeHelper";

// Import Processor Type
import {
  BackgroundDark,
  BorderDark,
  TextDark,
} from "../processor/processor.type";

// Import iPhone X helper
import { isIphoneX } from "../lib/iphoneXHelper";

type WidthSize = {
  maxWidth?: number;
  minWidth?: number;
  width?: number;
};

type HeightSize = {
  maxHeight?: number;
  minHeight?: number;
  height?: number;
};

export default class Instance {
  private _predefined: object | any;
  private _obj: object;
  private _bgOpacity: number;
  private _borderOpacity: number;
  private _textOpacity: number;
  private _bgDark?: BackgroundDark;
  private _borderDark?: BorderDark;
  private _textDark?: TextDark;

  constructor(customStyle?: object) {
    this._predefined = customStyle ? customStyle : map;
    this._obj = {};
    this._bgOpacity = 100;
    this._borderOpacity = 100;
    this._textOpacity = 100;
    this._bgDark = undefined;
    this._borderDark = undefined;
    this._textDark = undefined;
  }

  updateObject(data: object | undefined) {
    this._obj = {
      ...this._obj,
      ...data,
    };
  }

  /**
   * Get pre defined styles from osmicsx
   * @param data
   */
  predefinedStyles(data: string) {
    this.updateObject(this._predefined[data]);
  }

  /**
   * Check if the ["min-w", "w", "max-w", "min-h", "h", "max-h"]
   * are responsive or not
   * @param data
   */
  responsiveSize(data: string) {
    if (data.includes("/")) {
      this.updateObject(convertResponsive(data.split("/")));
    }
  }

  /**
   * Auto generate fixed width size
   * @param data
   */
  fixedWidthSize(data: string) {
    if (/(\bw\b\-[0-9]+)/.test(data)) {
      // Check wether it's max width, min width or width
      const _nextObject: WidthSize = data.includes("max-w-")
        ? {
            maxWidth: Number(data.replace("max-w-", "")),
          }
        : data.includes("min-w-")
        ? {
            minWidth: Number(data.replace("min-w-", "")),
          }
        : {
            width: Number(data.replace("w-", "")),
          };

      this.updateObject(_nextObject);
    }
  }

  /**
   * Auto generate fixed height size
   * @param data
   */
  fixedHeightSize(data: string) {
    if (/(\bh\b\-[0-9]+)/.test(data)) {
      // Check wether it's max height, min height or height
      const _nextObject: HeightSize = data.includes("max-h-")
        ? {
            maxHeight: Number(data.replace("max-h-", "")),
          }
        : data.includes("min-h-")
        ? {
            minHeight: Number(data.replace("min-h-", "")),
          }
        : {
            height: Number(data.replace("h-", "")),
          };

      this.updateObject(_nextObject);
    }
  }

  /**
   * Check if the size style are using percentage or not.
   * @param data
   */
  percentSize(data: string) {
    if (data.includes("%")) {
      this.updateObject(convertPercentage(data.split("%")));
    }
  }

  /**
   * Auto generate translate X or Y position
   * @param syntax styles syntax
   */
  transformTranslate(syntax: string) {
    if (/(-translate|translate)-(x|y)-([0-9]{1,3}$)/.test(syntax)) {
      const extractTranslate: string[] = syntax.split("-");
      const isNegative: boolean = syntax.includes("-translate");
      const lastIndex: number = extractTranslate.length - 1;
      const value: number = isNegative
        ? Number(-extractTranslate[lastIndex])
        : Number(extractTranslate[lastIndex]);

      if (extractTranslate.includes("x")) {
        this.updateObject({
          transform: [{ translateX: value }],
        });
      }

      if (extractTranslate.includes("y")) {
        this.updateObject({
          transform: [{ translateY: value }],
        });
      }
    }
  }

  /**
   * Auto generate scale X,Y or Both position
   * @param syntax styles syntax
   */
  transformScale(syntax: string) {
    if (
      /(-scale|scale)-(x|y)-([0-9]{1,3}$)/.test(syntax) ||
      /(-scale|scale)-([0-9]{1,3}$)/.test(syntax)
    ) {
      const extractScale: string[] = syntax.split("-");
      const isNegative: boolean = syntax.includes("-scale");
      const lastIndex: number = extractScale.length - 1;
      const value: number = isNegative
        ? Number(-extractScale[lastIndex])
        : Number(extractScale[lastIndex]);

      if (extractScale.includes("x")) {
        this.updateObject({
          transform: [{ scaleX: value }],
        });
      }

      if (extractScale.includes("y")) {
        this.updateObject({
          transform: [{ scaleY: value }],
        });
      }

      if (!extractScale.includes("x") && !extractScale.includes("y")) {
        this.updateObject({
          transform: [{ scale: value }],
        });
      }
    }
  }

  /**
   * Auto generate rotate X,Y or Both position
   * @param syntax styles syntax
   */
  transformRotate(syntax: string) {
    if (
      /(-rotate|rotate)-(x|y|z)-([0-9]{1,3}$)/.test(syntax) ||
      /(-rotate|rotate)-([0-9]{1,3}$)/.test(syntax)
    ) {
      const extractRotate: string[] = syntax.split("-");
      const isNegative: boolean = syntax.includes("-rotate");
      const lastIndex: number = extractRotate.length - 1;
      const value: number = isNegative
        ? Number(-extractRotate[lastIndex])
        : Number(extractRotate[lastIndex]);

      if (extractRotate.includes("x")) {
        this.updateObject({
          transform: [{ rotateX: `${value}deg` }],
        });
      }

      if (extractRotate.includes("y")) {
        this.updateObject({
          transform: [{ rotateY: `${value}deg` }],
        });
      }

      if (extractRotate.includes("z")) {
        this.updateObject({
          transform: [{ rotateZ: `${value}deg` }],
        });
      }

      if (
        !extractRotate.includes("x") &&
        !extractRotate.includes("y") &&
        !extractRotate.includes("z")
      ) {
        this.updateObject({
          transform: [{ rotate: `${value}deg` }],
        });
      }
    }
  }

  /**
   * Auto generate translate X or Y position
   * @param syntax styles syntax
   */
  transformSkew(syntax: string) {
    if (/(-skew|skew)-(x|y)-([0-9]{1,3}$)/.test(syntax)) {
      const extractSkew: string[] = syntax.split("-");
      const isNegative: boolean = syntax.includes("-skew");
      const lastIndex: number = extractSkew.length - 1;
      const value: number = isNegative
        ? Number(-extractSkew[lastIndex])
        : Number(extractSkew[lastIndex]);

      if (extractSkew.includes("x")) {
        this.updateObject({
          transform: [{ skewX: `${value}deg` }],
        });
      }

      if (extractSkew.includes("y")) {
        this.updateObject({
          transform: [{ skewY: `${value}deg` }],
        });
      }
    }
  }

  /**
   * Checking if there's a color opacity
   * @param syntax
   */
  colorOpacity(syntax: string) {
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
  darkTheme(syntax: string) {
    if (isDark(syntax)) {
      const extractSyntax = syntax.replace("dark:", "");

      this.predefinedStyles(extractSyntax);
    }
  }

  /**
   * Checking if it's notch or not
   * @param syntax
   */
  notch(syntax: string) {
    if (syntax.includes("notch") && isIphoneX()) {
      const extractStyle = syntax.replace("notch:", "");

      // check if width & size using responsive method or not
      this.responsiveSize(extractStyle);

      // auto generate percentage size
      this.percentSize(extractStyle);

      // auto generate fixed width size
      this.fixedWidthSize(extractStyle);

      // auto generate fixed width size
      this.fixedHeightSize(extractStyle);

      // auto generate transform position
      this.transformTranslate(extractStyle);

      // auto generate transform scale
      this.transformScale(extractStyle);

      // auto generate transform skew
      this.transformSkew(extractStyle);

      // auto generate transform rotate
      this.transformRotate(extractStyle);

      // Generate from pre-defined styles
      this.predefinedStyles(extractStyle);
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
    return opacityProcessor(
      this._obj,
      this._bgOpacity,
      this._borderOpacity,
      this._textOpacity
    );
  }
}
