
import { StyleSheet } from "react-native"
import map from "../predefined/map"

import Instance from "./instance"
import CustomProcessor from "../processor/multiThemeProcessor"

// Import Scale Utility
import { scaleWidth, scaleHeight } from "../lib/responsive"

/**
 * Create OsmiProvider for custom theme
 */
export default class OsmiProvider {
  _predefined?: object | any
  width: (widthPercent: number) => number
  height: (heightPercent: number) => number

  constructor(customStyle?: object) {
    this._predefined = customStyle ? {
      ...map,
      ...CustomProcessor(customStyle)
    } : map
    this.width = scaleWidth
    this.height = scaleHeight
  }

  // connect function for templating purpose
  connect(style: object) {
    let objStyle: any = {}

    Object.entries(style).forEach(([key, value]) => {
      const instanceStyle = new Instance(this._predefined)

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
  };

  // apply function for inline style
  apply() {
    const instanceStyle = new Instance(this._predefined)

    const arrStyle = arguments[0].split(" ")

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
      } else {
        return instanceStyle.getOutputStyle()
      }
    } else {
      return instanceStyle.getOutputStyle()
    }
  }
}
