import { Platform } from "react-native";

// responsive module
import { convertResponsive } from "../lib/responsive";

// percentage
import { convertPercentage } from "../lib/percentage";

// import opacity processing
import { opacityProcessor } from "../processor/opacity";

// import dark theme checker
import { isDark } from "../lib/darkThemeHelper";

// Import iPhone X helper
import { isIphoneX } from "../lib/iphoneXHelper";

// Import types
import type { StyleType } from "../lib/percentage";

export class Instance {
  private _predefined: Record<string, any>;
  private _obj: Record<string, any>;
  private _bgOpacity: number;
  private _borderOpacity: number;
  private _textOpacity: number;

  constructor(themeStyle?: Record<string, any>) {
    this._predefined = themeStyle ?? {};
    this._obj = {};
    this._bgOpacity = 100;
    this._borderOpacity = 100;
    this._textOpacity = 100;
  }

  private updateObject(data: Record<string, any>) {
    this._obj = { ...this._obj, ...data };
  }

  predefinedStyles(data: string) {
    if (this._predefined[data]) {
      this.updateObject(this._predefined[data]);
    }
  }

  applyStyles(syntax: string) {
    const styles = syntax.split(" ");
    styles.forEach((style) => {
      this.responsiveSize(style);
      this.percentSize(style);
      this.fixedSize(style);
      this.transform(style);
      this.colorOpacity(style);
      this.predefinedStyles(style);
      this.platformSpecific(style);
      this.notch(style);
    });
  }

  responsiveSize(data: string) {
    if (data.includes("/")) {
      const responsiveData = convertResponsive(data.split("/"));
      if (responsiveData) {
        this.updateObject(responsiveData);
      }
    }
  }

  percentSize(data: string) {
    if (data.endsWith("%")) {
      const splittedSyntax = data.split("%");
      const percentageData = convertPercentage([
        splittedSyntax[0] as StyleType,
        splittedSyntax[1],
      ]);
      if (percentageData) {
        this.updateObject(percentageData);
      }
    }
  }

  fixedSize(data: string) {
    const fixedSizeRegex = /^(max|min)?(w|h)-(\d+)$/;
    const match = data.match(fixedSizeRegex);
    if (match) {
      const [, minMax, type, value] = match;
      const sizeValue = Number(value);
      const key = `${minMax ? minMax + "-" : ""}${
        type === "w" ? "width" : "height"
      }`;
      this.updateObject({ [key]: sizeValue });
    }
  }

  transform(syntax: string) {
    const transformRegex = /^(translate|scale|rotate|skew)-(x|y|z)?-(-?\d+)$/;
    const match = syntax.match(transformRegex);
    if (match) {
      const [, transformType, axis, value] = match;
      const transformValue = axis
        ? {
            [`${transformType}${axis.toUpperCase()}`]: `${value}${
              transformType === "rotate" ? "deg" : ""
            }`,
          }
        : { [transformType]: value };
      this.updateObject({ transform: [transformValue] });
    }
  }

  colorOpacity(syntax: string) {
    const opacityRegex = /^(bg|border|text)-opacity-(\d+)$/;
    const match = syntax.match(opacityRegex);
    if (match) {
      const [, type, opacity] = match;
      const opacityValue = Number(opacity);
      if (type === "bg") {
        this._bgOpacity = opacityValue;
      } else if (type === "border") {
        this._borderOpacity = opacityValue;
      } else if (type === "text") {
        this._textOpacity = opacityValue;
      }
    }
  }

  darkTheme(syntax: string, mode: "dark" | "light" | "system") {
    if (isDark(syntax, mode)) {
      this.predefinedStyles(syntax.replace("dark:", ""));
    }
  }

  platformSpecific(syntax: string) {
    const platformRegex = /^(android|ios):(.+)$/;
    const match = syntax.match(platformRegex);
    if (match && Platform.OS === match[1]) {
      this.applyStyles(match[2]);
    }
  }

  notch(syntax: string) {
    if (syntax.startsWith("notch:") && isIphoneX()) {
      this.applyStyles(syntax.replace("notch:", ""));
    }
  }

  get predefined() {
    return this._predefined;
  }

  getOutputStyle() {
    return opacityProcessor(
      this._obj,
      this._bgOpacity,
      this._borderOpacity,
      this._textOpacity
    );
  }
}
