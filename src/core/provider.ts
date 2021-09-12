import { StyleSheet } from "react-native"
import map from "../predefined/map"

import Instance from "./instance"
import CustomProcessor from "../processor/multiThemeProcessor"
import { CustomTheme } from "../processor/processor.type"

// Import Scale Utility
import { scaleWidth, scaleHeight } from "../lib/responsive"

// Import appearanceHook
import { onPatch } from "mobx-state-tree"
import { appearanceHook } from "./appearance"

/**
 * Create OsmiProvider for custom theme
 */
export default class OsmiProvider {
  _predefined?: object | any
  width: (widthPercent: number) => number
  height: (heightPercent: number) => number

  constructor(customStyle?: CustomTheme) {
    this._predefined = customStyle ? {
      ...map,
      ...CustomProcessor(customStyle)
    } : map
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

    const _styleProcssing = (newTheme?: string) => {
      Object.entries(style).forEach(([key, value]) => {
        const instanceStyle = new Instance(this._predefined, newTheme)

        value.split(" ").map((syntax: string) => {
          // check if width & size using responsive method or not
          instanceStyle.responsiveSize(syntax)

          // auto generate fixed width size
          instanceStyle.fixedWidthSize(syntax)

          // auto generate fixed width size
          instanceStyle.fixedHeightSize(syntax)

          // auto generate percentage width
          instanceStyle.percentWidth(syntax)

          // auto generate percentage height
          instanceStyle.percentHeight(syntax)

          // auto generate transform position
          instanceStyle.transformTranslate(syntax)

          // auto generate transform scale
          instanceStyle.transformScale(syntax)

          // auto generate transform skew
          instanceStyle.transformSkew(syntax)

          // auto generate transform rotate
          instanceStyle.transformRotate(syntax)

          // Check if there's coloring opacity
          instanceStyle.colorOpacity(syntax)

          // Check if there's any dark theme
          instanceStyle.darkTheme(syntax)

          // Generate from pre-defined styles
          instanceStyle.predefinedStyles(syntax)
        })

        objStyle[key] = instanceStyle.getOutputStyle()
      })
    }
    
    _styleProcssing()

    onPatch(appearanceHook, patch => {
      _styleProcssing(patch.value)
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

      // auto generate percentage width
      instanceStyle.percentWidth(syntax)

      // auto generate percentage height
      instanceStyle.percentHeight(syntax)

      // auto generate transform position
      instanceStyle.transformTranslate(syntax)

      // auto generate transform scale
      instanceStyle.transformScale(syntax)

      // auto generate transform skew
      instanceStyle.transformSkew(syntax)

      // auto generate transform rotate
      instanceStyle.transformRotate(syntax)

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
}
