import { useColorScheme } from "react-native"

export default (styles, bgDark, borderDark, textDark) => {
  let processedStyle = styles

  // only repalce if color scheme is dark
  if (useColorScheme() === "dark") {
    if (bgDark) {
      processedStyle = {
        ...processedStyle,
        backgroundColor: bgDark["backgroundColor"]
      }
    }

    if (borderDark) {
      processedStyle = {
        ...processedStyle,
        borderColor: borderDark["borderColor"]
      }
    }

    if (textDark) {
      processedStyle = {
        ...processedStyle,
        color: textDark["color"]
      }
    }
  }

  return processedStyle
}