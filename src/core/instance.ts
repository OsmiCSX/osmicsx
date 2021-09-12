// import pre-defined styles
import map from "../predefined/map"

// responsive module
import { convertResponsive } from "../lib/responsive"

// import dark theme processor
import darkThemeProcessor from "../processor/darkThemeProcessor"

// import opacity processing
import opacityProcessor from "../processor/opacityProcessor"

// Import Processor Type
import { BackgroundDark, BorderDark, TextDark } from "../processor/processor.type"

// Appearance Hook
import { appearanceHook } from "./appearance"

type WidthSize = {
  maxWidth?: number,
  minWidth?: number,
  width?: number
}

type HeightSize = {
  maxHeight?: number,
  minHeight?: number,
  height?: number
}

export default class Instance {
  _predefined: object | any
  _theme?: string
  _obj: object
  _bgOpacity: number
  _borderOpacity: number
  _textOpacity: number
  _bgDark?: BackgroundDark
  _borderDark?: BorderDark
  _textDark?: TextDark

  constructor(customStyle?: object, theme?: string) {
    this._predefined = customStyle ? customStyle : map
    this._theme = theme ?? appearanceHook.theme
    this._obj = {}
    this._bgOpacity = 100
    this._borderOpacity = 100
    this._textOpacity = 100
    this._bgDark = undefined
    this._borderDark = undefined
    this._textDark = undefined
  }

  updateObject(data: object | undefined) {
    this._obj = {
      ...this._obj,
      ...data
    }
  }

  /**
   * Get pre defined styles from osmicsx
   * @param data
   */
  predefinedStyles(data: string) {
    this.updateObject(this._predefined[data])
  }

  /**
   * Check if the width & height are
   * responsive or not
   * @param data
   */
  responsiveSize(data: string) {
    if (data.includes("/")) {
      this.updateObject(convertResponsive(data.split("/")))
    }
  }

  /**
   * Auto generate fixed width size
   * @param data
   */
  fixedWidthSize(data: string) {
    if(/(\bw\b\-[0-9]+)/.test(data)) {
      // Check wether it's max width, min width or width
      const _nextObject: WidthSize = data.includes("max-w-") ? {
        maxWidth: Number(data.replace("max-w-", ""))
      } : data.includes("min-w-") ? {
        minWidth: Number(data.replace("min-w-", ""))
      } : {
        width: Number(data.replace("w-", ""))
      }

      this.updateObject(_nextObject)
    }
  }

  /**
   * Auto generate fixed height size
   * @param data
   */
  fixedHeightSize(data: string) {
    if (/(\bh\b\-[0-9]+)/.test(data)) {
      // Check wether it's max height, min height or height
      const _nextObject: HeightSize = data.includes("max-h-") ? {
        maxHeight: Number(data.replace("max-h-", ""))
      } : data.includes("min-h-") ? {
        minHeight: Number(data.replace("min-h-", ""))
      } : {
        height: Number(data.replace("h-", ""))
      }

      this.updateObject(_nextObject)
    }
  }

  /**
   * Auto generate width in $ (string)
   * @param data
   */
  percentWidth(data: string) {
    if (/(\bw\b\%[0-9]+)/.test(data)) {
      this.updateObject({
        width: data.replace("w%", "") + "%"
      })
    }
  }

  /**
   * Auto generate height in $ (string)
   * @param data
   */
   percentHeight(data: string) {
    if (/(\bh\b\%[0-9]+)/.test(data)) {
      this.updateObject({
        height: data.replace("h%", "") + "%"
      })
    }
  }

  /**
   * Auto generate translate X or Y position
   * @param syntax styles syntax
   */
   transformTranslate(syntax: string) {
    if (/(-translate|translate)-(x|y)-([0-9]{1,3}$)/.test(syntax)) {
      const extractTranslate: string[] = syntax.split("-")
      const isNegative: boolean = syntax.includes("-translate")
      const lastIndex: number = extractTranslate.length - 1
      const value: number = isNegative ? Number(-extractTranslate[lastIndex]) : Number(extractTranslate[lastIndex])

      if (extractTranslate.includes("x")) {
        this.updateObject({
          transform: [{ translateX: value }]
        })
      }

      if (extractTranslate.includes("y")) {
        this.updateObject({
          transform: [{ translateY: value }]
        })
      }
    }
  }

  /**
   * Auto generate scale X,Y or Both position
   * @param syntax styles syntax
   */
  transformScale(syntax: string) {
    if (/(-scale|scale)-(x|y)-([0-9]{1,3}$)/.test(syntax) || /(-scale|scale)-([0-9]{1,3}$)/.test(syntax)) {
      const extractScale: string[] = syntax.split("-")
      const isNegative: boolean = syntax.includes("-scale")
      const lastIndex: number = extractScale.length - 1
      const value: number = isNegative ? Number(-extractScale[lastIndex]) : Number(extractScale[lastIndex])

      if (extractScale.includes("x")) {
        this.updateObject({
          transform: [{ scaleX: value }]
        })
      }

      if (extractScale.includes("y")) {
        this.updateObject({
          transform: [{ scaleY: value }]
        })
      }

      if (!extractScale.includes("x") && !extractScale.includes("y")) {
        this.updateObject({
          transform: [{ scale: value }]
        })
      }
    }
  }

  /**
   * Checking if there's a color opacity
   * @param syntax
   */
  colorOpacity(syntax: string) {
    if (/(bg|text|border)-opacity-([0-9]{1,3}$)/.test(syntax)) {
      const extractOpacity = syntax.split("-opacity-")

      switch(extractOpacity[0]) {
        case "bg":
          this._bgOpacity = Number(extractOpacity[1])
          break

        case "border":
          this._borderOpacity = Number(extractOpacity[1])
          break

        case "text":
          this._textOpacity = Number(extractOpacity[1])
          break
      }
    }
  }

  /**
   * Checking if it's using dark mode or not
   * @param syntax
   */
  darkTheme(syntax: string) {
    if (syntax.includes("dark")) {
      const extractColor = syntax.replace("dark:", "")

      if (syntax.includes("dark:bg-")) {
        this._bgDark = this._predefined[extractColor]
      }

      if (syntax.includes("dark:border-")) {
        this._borderDark = this._predefined[extractColor]
      }

      if (syntax.includes("dark:text-")) {
        this._textDark = this._predefined[extractColor]
      }
    }
  }

  get predefined() {
    return this._predefined
  }

  /**
   * Get final style data
   * @returns {*|{}}
   */
  getOutputStyle() {
    this._obj = darkThemeProcessor(this._obj, this._theme, this._bgDark, this._borderDark, this._textDark)

    return opacityProcessor(this._obj, this._bgOpacity, this._borderOpacity, this._textOpacity)
  }
}
