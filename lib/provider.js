import { StyleSheet } from 'react-native'
import map from '../data/map'
import Instance from "../lib/instance"

// Import Scale Utility
import { scaleWidth, scaleHeight } from './responsive';

/**
 * Create OsmiProvider for custom theme
 */
export default class OsmiProvider {
  constructor(customStyle) {
    this._predefined = {
      ...map,
      ...customStyle
    }
    this.width = scaleWidth
    this.height = scaleHeight
  }

  _transformCustomStyle(customStyle) {

  }

  // connect function for templating purpose
  connect(style) {
    let objStyle = {}

    Object.entries(style).forEach(([key, value]) => {
      const instanceStyle = new Instance(this._predefined)

      value.split(" ").map((item) => {
        // check if width & size using responsive method or not
        instanceStyle.responsiveSize(item)

        // auto generate fixed width size
        instanceStyle.fixedWidthSize(item)

        // auto generate fixed width size
        instanceStyle.fixedHeightSize(item)

        // Check if there's coloring opacity
        instanceStyle.colorOpacity(item)

        // Generate from pre-defined styles
        instanceStyle.predefinedStyles(item)
      })

      objStyle[key] = instanceStyle.getOutputStyle()
    })

    return StyleSheet.create(objStyle)
  };

  // apply function for inline style
  apply() {
    const instanceStyle = new Instance(this._predefined)

    const arrStyle = arguments[0].split(" ")

    arrStyle.map((item) => {
      // check if width & size using responsive method or not
      instanceStyle.responsiveSize(item)

      // auto generate fixed width size
      instanceStyle.fixedWidthSize(item)

      // auto generate fixed width size
      instanceStyle.fixedHeightSize(item)

      // Check if there's coloring opacity
      instanceStyle.colorOpacity(item)

      // Generate from pre-defined styles
      instanceStyle.predefinedStyles(item)
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
