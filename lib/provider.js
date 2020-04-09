import { StyleSheet } from 'react-native'
import map from '../data/map'
import colors from '../data/colors.json'

// Import Scale Utility
import { scaleWidth, scaleHeight } from '../src/scale';

// Import apply() helper
import apply from './apply'

/**
 * Create OsmiProvider for custom theme
 */
export default function OsmiProvider(customStyle) {
  // Mapping default namespace
  this.mapStyle = {
    ...colors,
    ...map,
    ...customStyle
  };

  // connect function for templating purpose
  this.connect = (style) => {
    let objStyle = {};

    Object.entries(style).forEach(([key, value]) => {
      let obj = {};

      value.map((item) => {
        if (typeof item === "object") {
          obj = {
            ...obj,
            ...item
          }
        } else {
          obj = {
            ...obj,
            ...this.mapStyle[item]
          }
        }
      });

      objStyle[key] = obj
    });

    return StyleSheet.create(objStyle)
  };

  // apply function for inline style
  this.apply = function() {
    let obj = {};

    for (let i=0; i<arguments.length; i++) {
      const item = arguments[i];

      if (typeof item === "string") {
        obj = {
          ...obj,
          ...this.mapStyle[item]
        }
      } else {
        obj = {
          ...obj,
          ...item
        }
      }
    }

    return obj
  };

  // Scaling width
  this.width = scaleWidth;

  // Scaling Height
  this.height = scaleHeight;
}
