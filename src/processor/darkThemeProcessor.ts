import { Appearance } from "react-native"
import { BackgroundDark, BorderDark, TextDark } from "./processor.type"

// Processor to detect and replace if it's using dark theme
export default (
  styles: object,
  appearanceMode?: string,
  bgDark?: BackgroundDark,
  borderDark?: BorderDark,
  textDark?: TextDark
): object => {
  let processedStyle = styles

  // only repalce if color scheme is dark
  if (appearanceMode === 'dark' || (appearanceMode === 'system' && Appearance.getColorScheme() === "dark")) {
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
