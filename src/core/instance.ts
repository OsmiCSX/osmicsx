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
import { onAction } from "mobx-state-tree"
import { appearanceHook } from "./appearance"

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
      this.updateObject({
        width: Number(data.replace("w-", ""))
      })
    }
  }

  /**
   * Auto generate fixed height size
   * @param data
   */
  fixedHeightSize(data: string) {
    if (/(\bh\b\-[0-9]+)/.test(data)) {
      this.updateObject({
        height: Number(data.replace("h-", ""))
      })
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
