import { StyleSheet, ImageStyle, ViewStyle, TextStyle } from "react-native"
import map from "../predefined/map"

import Instance from "./instance"
import CustomProcessor from "../processor/multiThemeProcessor"
import { CustomThemeType } from "../processor/processor.type"

// Import Scale Utility
import { scaleWidth, scaleHeight } from "../lib/responsive"

// Import appearanceHook
import { onPatch } from "mobx-state-tree"
import {appearanceHook} from "./appearance"

type NamedInputStyles<T> = { [P in keyof T]: string };
type NamedOuputStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

/**
 * Create OsmiProvider for custom theme
 */
class OsmiProvider {
  private _predefined?: object | any
  width: (widthPercent: number) => number
  height: (heightPercent: number) => number

  constructor(customStyle?: CustomThemeType) {
    this._predefined = customStyle ? {
      ...map,
      ...CustomProcessor(customStyle)
    } : map
    this.width = scaleWidth
    this.height = scaleHeight
  }

  initInstance() {
    const instanceStyle = new Instance(this._predefined)

    return instanceStyle
  }

  getPredefined() {
    return this._predefined
  }
}

export default function providerApp(theme: CustomThemeType) {
  const initProvider = new OsmiProvider(theme)
  const predefined = initProvider.getPredefined()

  /**
   * Create list of object style with pre-defined styles
   * @param {object} style list of styles wrapped with object
   * @returns Stylesheet react-native
   */
   function connect<T extends NamedInputStyles<T> | NamedInputStyles<any>>(style: T | NamedInputStyles<T>): NamedOuputStyles<T> {
    let objStyle: any = {}
    const instanceStyle = initProvider.initInstance()

    const _runProcessing = () => {
      Object.entries(style).forEach(([key, value]) => {
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

    _runProcessing()

    onPatch(appearanceHook, () => {
      _runProcessing()
    })

    return StyleSheet.create(objStyle)
  }

  /**
   * Apply some pre-defined styles
   * @param {string} args list of pre-definedstyle args
   * @returns {object}
   */
   function apply(args: string) {
    const instanceStyle = initProvider.initInstance()
    let objStyle: any = {}
    const arrStyle = args.split(" ")

    if (arrStyle.length === 1) {
      if (typeof predefined[arrStyle[0]] === "string") {
        return predefined[arrStyle[0]].replace("--osmi-opacity", 1)
      }
    }

    if (arrStyle.length === 2) {
      const hasOpacity = arrStyle[1].includes("--opacity")
      const getColorOpacity = arrStyle[1].replace("--opacity-", "")

      if (typeof predefined[arrStyle[0]] === "string" && hasOpacity) {
        return predefined[arrStyle[0]].replace("--osmi-opacity", (Number(getColorOpacity) / 100))
      }
    }

    const _runProcessing = () => {
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

      objStyle = instanceStyle.getOutputStyle()
    }
    
    _runProcessing()

    onPatch(appearanceHook, () => {
      _runProcessing()
    })

    return objStyle
  }

  return {
    apply,
    connect,
  }
}