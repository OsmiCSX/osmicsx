import { Appearance } from "react-native"
import { BackgroundDark, BorderDark, TextDark } from "./processor.type"

// Processor to detect and replace if it's using dark theme
export default (
  styles: object,
  bgDark: BackgroundDark | undefined,
  borderDark: BorderDark | undefined,
  textDark: TextDark | undefined
): object => {
  let processedStyle = styles

  // only repalce if color scheme is dark
  if (Appearance.getColorScheme() === "dark") {
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
