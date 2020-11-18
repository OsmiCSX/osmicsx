import { StyleSheet } from 'react-native'
import map from '../data/map'
import colors from '../data/colors.json'

// Import Scale Utility
import { scaleWidth, scaleHeight, convertResponsive } from './responsive';

/**
 * Create OsmiProvider for custom theme
 */
export default function OsmiProvider(customStyle) {
  // Mapping default namespace
  const mapStyle = {
    ...colors,
    ...map,
    ...customStyle
  };

  // connect function for templating purpose
  this.connect = (style) => {
    let objStyle = {};
    let warnDeprecated = false

    Object.entries(style).forEach(([key, value]) => {
      let obj = {};

      if (Array.isArray(value)) {
        !warnDeprecated ? warnDeprecated = true : null

        value.map((item) => {
          if (typeof item === "object") {
            obj = {
              ...obj,
              ...item
            }
          } else {
            obj = {
              ...obj,
              ...mapStyle[item]
            }
          }
        });
      } else {
        value.split(" ").map((item) => {
          obj = item.includes("/") ?
            {
              ...obj,
              ...convertResponsive(item.split("/"))
            } :
            {
              ...obj,
              ...mapStyle[item]
            }
        })
      }

      objStyle[key] = obj
    })

    warnDeprecated ? console.warn("styling in connect() method with [] (array) is deprecated and will be removed in the next OsmiCSX update.") : null

    return StyleSheet.create(objStyle)
  };

  // apply function for inline style
  this.apply = function () {
    let obj = {};

    if (arguments.length > 1) {
      console.warn("calling multiple style with , (comma) separator is deprecated and will be removed in the next OsmiCSX update.")

      for (let i=0; i<arguments.length; i++) {
        const item = arguments[i];

        if (typeof item === "string") {
          obj = {
            ...obj,
            ...mapStyle[item]
          }
        } else {
          obj = {
            ...obj,
            ...item
          }
        }
      }

      return obj
    } else {
      const arrStyle = arguments[0].split(" ")

      arrStyle.map((item) => {
        obj = item.includes("/") ?
          {
            ...obj,
            ...convertResponsive(item.split("/"))
          } :
          {
            ...obj,
            ...mapStyle[item]
          }
      })

      if (arrStyle.length === 1) {
        if (typeof mapStyle[arrStyle[0]] === "string") {
          return mapStyle[arrStyle[0]]
        } else {
          return obj
        }
      } else {
        return obj
      }
    }
  };

  // Scaling width
  this.width = scaleWidth;

  // Scaling Height
  this.height = scaleHeight;
}
