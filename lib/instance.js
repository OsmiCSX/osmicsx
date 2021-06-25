import map from "../data/map"

// responsive module
import { convertResponsive } from "./responsive"

// import dark theme processor
import darkThemeProcessor from "./darkThemeProcessor"

// import opacity processing
import opacityProcessor from "../lib/opacity-processor"

export default class Instance {
  constructor(customStyle) {
    this._predefined = customStyle ? customStyle : map
    this._obj = {}
    this._bgOpacity = 100
    this._borderOpacity = 100
    this._textOpacity = 100
    this._bgDark = null
    this._borderDark = null
    this._textDark = null
  }

  updateObject(data) {
    this._obj = {
      ...this._obj,
      ...data
    }
  }

  /**
   * Get pre defined styles from osmicsx
   * @param data
   */
  predefinedStyles(data) {
    this.updateObject(this._predefined[data])
  }

  /**
   * Check if the width & height are
   * responsive or not
   * @param data
   */
  responsiveSize(data) {
    if (data.includes("/")) {
      this.updateObject(convertResponsive(data.split("/")))
    }
  }

  /**
   * Auto generate fixed width size
   * @param data
   */
  fixedWidthSize(data) {
    if (data.includes("w-")) {
      this.updateObject({
        width: Number(data.replace("w-"))
      })
    }
  }

  /**
   * Auto generate fixed height size
   * @param data
   */
  fixedHeightSize(data) {
    if (data.includes("h-")) {
      this.updateObject({
        height: Number(data.replace("h-"))
      })
    }
  }

  /**
   * Checking if there's a color opacity
   * @param data
   */
  colorOpacity(data) {
    if (/(bg|text|border)-opacity-([0-9]{1,3}$)/.test(data)) {
      const extractOpacity = data.split("-opacity-")

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

  darkTheme(syntax) {
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
    this._obj = darkThemeProcessor(this._obj, this._bgDark, this._borderDark, this._textDark)
    
    return opacityProcessor(this._obj, this._bgOpacity, this._borderOpacity, this._textOpacity)
  }
}
