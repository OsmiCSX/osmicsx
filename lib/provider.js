import { StyleSheet } from 'react-native'
import map from '../data/map'

// Import Scale Utility
import { scaleWidth, scaleHeight } from '../src/scale';

/**
 * Create OsmiProvider for custom theme
 */
export default function OsmiProvider(customStyle) {
  // Mapping default namespace
  this.mapStyle = {
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
  this.apply = (namespace) => {
    let obj = {};

    if (Array.isArray(namespace)) {
      namespace.map((item) => {
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
    } else {
      obj = this.mapStyle[namespace]
    }

    return obj
  };

  // Scaling width
  this.width = scaleWidth;

  // Scaling Height
  this.height = scaleHeight;
}
