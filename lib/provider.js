import { StyleSheet } from 'react-native'
import map from '../data/map'

export default function OsmiProvider(customStyle) {
  this.mapStyle = {
    ...map,
    ...customStyle
  };

  this.connect = (style) => {
    let objStyle = {};

    Object.entries(style).forEach(([key, value]) => {
      let obj = {}

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

  this.apply = (namespace) => {
    let obj = {};

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

    return obj
  };
}
