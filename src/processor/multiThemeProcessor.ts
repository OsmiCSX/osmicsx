// import lib converter
import hexToRGBA from "../lib/hexToRGBA"

// import type
import { 
  CustomThemeType, 
  CustomColors, 
  CustomSpacing, 
  CustomBorder, 
  CustomFonts, 
  CustomLineHeight,
  CustomLetterSpacing,
  CustomShadow,
} from "./processor.type"

// custom colors processor
const customColors = (data: CustomColors): object => {
  let colorStyles: object = {}

  // mapping colors
  Object.entries(data).map(([key, value]): void => {
    const fixedColor = value.includes("#") ? hexToRGBA(value) : value

    colorStyles = {
      ...colorStyles,
      [key]: fixedColor,
      [`bg-${key}`]: { backgroundColor: fixedColor },
      [`border-${key}`]: { borderColor: fixedColor },
      [`text-${key}`]: { color: fixedColor },
    }
  })

  return colorStyles
}

// custom spacings processor
const customSpacings = (data: CustomSpacing): object => {
  let spacingStyles: object = {}

  // mapping spacing
  Object.entries(data).map(([key, value]): void => {
    const negativeValue: number = value as number < 0 ? value as number * -1 : value as number

    spacingStyles = {
      ...spacingStyles,
      [`p-${key}`]: { padding: value },
      [`py-${key}`]: { paddingTop: value, paddingBottom: value },
      [`px-${key}`]: { paddingLeft: value, paddingRight: value },
      [`pt-${key}`]: { paddingTop: value },
      [`pr-${key}`]: { paddingRight: value },
      [`pb-${key}`]: { paddingBottom: value },
      [`pl-${key}`]: { paddingLeft: value },
      [`m-${key}`]: { margin: value },
      [`my-${key}`]: { marginTop: value, marginBottom: value },
      [`mx-${key}`]: { marginLeft: value, marginRight: value },
      [`mt-${key}`]: { marginTop: value },
      [`mr-${key}`]: { marginRight: value },
      [`mb-${key}`]: { marginBottom: value },
      [`ml-${key}`]: { marginLeft: value },
      [`-p-${key}`]: { padding: negativeValue },
      [`-py-${key}`]: { paddingTop: negativeValue, paddingBottom: negativeValue },
      [`-px-${key}`]: { paddingLeft: negativeValue, paddingRight: negativeValue },
      [`-pt-${key}`]: { paddingTop: negativeValue },
      [`-pr-${key}`]: { paddingRight: negativeValue },
      [`-pb-${key}`]: { paddingBottom: negativeValue },
      [`-pl-${key}`]: { paddingLeft: negativeValue },
      [`-m-${key}`]: { margin: negativeValue },
      [`-my-${key}`]: { marginTop: negativeValue, marginBottom: negativeValue },
      [`-mx-${key}`]: { marginLeft: negativeValue, marginRight: negativeValue },
      [`-mt-${key}`]: { marginTop: negativeValue },
      [`-mr-${key}`]: { marginRight: negativeValue },
      [`-mb-${key}`]: { marginBottom: negativeValue },
      [`-ml-${key}`]: { marginLeft: negativeValue },
      [`inset-${key}`]: { top: value, right: value, bottom: value, left: value },
      [`inset-y-${key}`]: { top: value, bottom: value },
      [`inset-x-${key}`]: { right: value, left: value },
      [`top-${key}`]: { top: value },
      [`right-${key}`]: { right: value },
      [`bottom-${key}`]: { bottom: value },
      [`left-${key}`]: { left: value },
      [`-top-${key}`]: { top: negativeValue },
      [`-right-${key}`]: { right: negativeValue },
      [`-bottom-${key}`]: { bottom: negativeValue },
      [`-left-${key}`]: { left: negativeValue },
    }
  })

  return spacingStyles
}

// custom borders processor
const customBorders = (data: CustomBorder): object => {
  let borderStyles: object = {}

  // mapping border size
  if (data?.width) {
    Object.entries(data.width).map(([key, value]): void => {
      borderStyles = {
        ...borderStyles,
        [`border-${key}`]: { borderWidth: value },
        [`border-t-${key}`]: { borderTopWidth: value },
        [`border-r-${key}`]: { borderRightWidth: value },
        [`border-b-${key}`]: { borderBottomWidth: value },
        [`border-l-${key}`]: { borderLeftWidth: value },
      }
    })
  }

  // mapping border radius
  if (data?.radius) {
    Object.entries(data.radius).map(([key, value]): void => {
      borderStyles = {
        ...borderStyles,
        [`rounded-${key}`]: { borderRadius: value },
        [`rounded-t-${key}`]: { borderTopLeftRadius: value, borderTopRightRadius: value },
        [`rounded-r-${key}`]: { borderTopRightRadius: value, borderBottomRightRadius: value },
        [`rounded-b-${key}`]: { borderBottomRightRadius: value, borderBottomLeftRadius: value },
        [`rounded-l-${key}`]: { borderBottomLeftRadius: value, borderTopLeftRadius: value },
        [`rounded-tl-${key}`]: { borderTopLeftRadius: value },
        [`rounded-tr-${key}`]: { borderTopRightRadius: value },
        [`rounded-br-${key}`]: { borderBottomRightRadius: value },
        [`rounded-bl-${key}`]: { borderBottomLeftRadius: value },
      }
    })
  }

  return borderStyles
}

// custom fonts processor
const customFonts = (object: CustomFonts): object => {
  let fontStyles: object = {}

  // mapping font family
  if (object?.family) {
    Object.entries(object?.family).map(([key, value]): void => {
      fontStyles = {
        ...fontStyles,
        [`font-${key}`]: { fontFamily: value }
      }
    })
  }

  // mapping font size
  if (object?.size) {
    Object.entries(object?.size).map(([key, value]): void => {
      fontStyles = {
        ...fontStyles,
        [`text-${key}`]: { fontSize: value }
      }
    })
  }

  return fontStyles
}

// custom line height processor
const customLineHeights = (data: CustomLineHeight): object => {
  let lineHeights: object = {}

  // mapping line height
  Object.entries(data).map(([key, value]): void => {
    lineHeights = {
      ...lineHeights,
      [`leading-${key}`]: { lineHeight: value }
    }
  })

  return lineHeights
}

// custom letter spacing processor
const customLetterSpacings = (data: CustomLetterSpacing): object => {
  let letterSpacing: object = {}

  // mapping letter spacing
  Object.entries(data).map(([key, value]): void => {
    letterSpacing = {
      ...letterSpacing,
      [`tracking-${key}`]: { letterSpacing: value }
    }
  })

  return letterSpacing
}

// custom shadow processor
const customShadows = (data: CustomShadow): object => {
  let shadow: object = {}

  // mapping shadow
  Object.entries(data).map(([key, value]): void => {
    shadow = {
      ...shadow,
      [`shadow-${key}`]: value
    }
  })

  return shadow
}

// Processor to generate Custom Theme into Pre-defined Styles
export default (customTheme: CustomThemeType): object => {
  let finalObject: object = {}

  // mapping colors
  if (customTheme?.colors) {
    finalObject = {
      ...finalObject,
      ...customColors(customTheme?.colors)
    }
  }

  // mapping spacing
  if (customTheme?.spacing) {
    finalObject = {
      ...finalObject,
      ...customSpacings(customTheme?.spacing)
    }
  }

  // mapping borders
  if (customTheme?.border) {
    finalObject = {
      ...finalObject,
      ...customBorders(customTheme?.border)
    }
  }

  // mapping font family & size
  if (customTheme?.font) {
    finalObject = {
      ...finalObject,
      ...customFonts(customTheme?.font)
    }
  }

  // mapping line heights
  if (customTheme?.lineHeight) {
    finalObject = {
      ...finalObject,
      ...customLineHeights(customTheme?.lineHeight)
    }
  }

  // mapping letter spacing
  if (customTheme?.letterSpacing) {
    finalObject = {
      ...finalObject,
      ...customLetterSpacings(customTheme?.letterSpacing)
    }
  }

  // mapping shadow
  if (customTheme?.shadow) {
    finalObject = {
      ...finalObject,
      ...customShadows(customTheme?.shadow)
    }
  }

  return finalObject
}
