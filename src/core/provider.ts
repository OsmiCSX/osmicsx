import { StyleSheet } from "react-native"
import map from "../predefined/map"

import Instance from "./instance"
import CustomProcessor from "../processor/multiThemeProcessor"
import { CustomTheme } from "../processor/processor.type"

// Import Scale Utility
import { scaleWidth, scaleHeight } from "../lib/responsive"

/**
 * Create OsmiProvider for custom theme
 */
export default class OsmiProvider {
  _predefined?: object | any
  _appearanceMode: string
  width: (widthPercent: number) => number
  height: (heightPercent: number) => number

  constructor(customStyle?: CustomTheme) {
    this._predefined = customStyle ? {
      ...map,
      ...CustomProcessor(customStyle)
    } : map
    this._appearanceMode = "system"
    this.width = scaleWidth
    this.height = scaleHeight
  }

  /**
   * Create list of object style with pre-defined styles
   * @param {object} style list of styles wrapped with object
   * @returns Stylesheet react-native
   */
  connect(style: object) {
    let objStyle: any = {}

    Object.entries(style).forEach(([key, value]) => {
      const instanceStyle = new Instance(this._predefined, this._appearanceMode)

      value.split(" ").map((syntax: string) => {
        // check if width & size using responsive method or not
        instanceStyle.responsiveSize(syntax)

        // auto generate fixed width size
        instanceStyle.fixedWidthSize(syntax)

        // auto generate fixed width size
        instanceStyle.fixedHeightSize(syntax)

        // Check if there's coloring opacity
        instanceStyle.colorOpacity(syntax)

        // Check if there's any dark theme
        instanceStyle.darkTheme(syntax)

        // Generate from pre-defined styles
        instanceStyle.predefinedStyles(syntax)
      })

      objStyle[key] = instanceStyle.getOutputStyle()
    })

    return StyleSheet.create(objStyle)
  }

  /**
   * Apply some pre-defined styles
   * @param {string} args list of pre-definedstyle args
   * @returns {object}
   */
  apply(args: string) {
    const instanceStyle = new Instance(this._predefined)

    const arrStyle = args.split(" ")

    arrStyle.map((syntax: string) => {
      // check if width & size using responsive method or not
      instanceStyle.responsiveSize(syntax)

      // auto generate fixed width size
      instanceStyle.fixedWidthSize(syntax)

      // auto generate fixed width size
      instanceStyle.fixedHeightSize(syntax)

      // Check if there's coloring opacity
      instanceStyle.colorOpacity(syntax)

      // Check if there's any dark theme
      instanceStyle.darkTheme(syntax)

      // Generate from pre-defined styles
      instanceStyle.predefinedStyles(syntax)
    })

    if (arrStyle.length === 1) {
      if (typeof this._predefined[arrStyle[0]] === "string") {
        return this._predefined[arrStyle[0]].replace("--osmi-opacity", 1)
      }
    }

    if (arrStyle.length === 2) {
      const hasOpacity = arrStyle[1].includes("--opacity")
      const getColorOpacity = arrStyle[1].replace("--opacity-", "")

      if (typeof this._predefined[arrStyle[0]] === "string" && hasOpacity) {
        return this._predefined[arrStyle[0]].replace("--osmi-opacity", (Number(getColorOpacity) / 100))
      }
    }
    
    return instanceStyle.getOutputStyle()
  }

  /**
   * Get current Appearance Mode
   */
  get appearanceMode() {
    return this._appearanceMode
  }

  /**
   * Set current Appearance Mode
   */
  set appearanceMode(theme: string) {
    this._appearanceMode = theme
  }
}
