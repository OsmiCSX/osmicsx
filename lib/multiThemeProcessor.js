import hexToRGBA from "./hexToRGBA"

// custom colors processor
const customColors = (object) => {
  let colorStyles = {}

  Object.entries(object).map(([key, value]) => {
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
const customSpacings = (object) => {
  let spacingStyles = {}

  Object.entries(object).map(([key, value]) => {
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
      [`-p-${key}`]: { padding: -(value) },
      [`-py-${key}`]: { paddingTop: -(value), paddingBottom: -(value) },
      [`-px-${key}`]: { paddingLeft: -(value), paddingRight: -(value) },
      [`-pt-${key}`]: { paddingTop: -(value) },
      [`-pr-${key}`]: { paddingRight: -(value) },
      [`-pb-${key}`]: { paddingBottom: -(value) },
      [`-pl-${key}`]: { paddingLeft: -(value) },
      [`-m-${key}`]: { margin: -(value) },
      [`-my-${key}`]: { marginTop: -(value), marginBottom: -(value) },
      [`-mx-${key}`]: { marginLeft: -(value), marginRight: -(value) },
      [`-mt-${key}`]: { marginTop: -(value) },
      [`-mr-${key}`]: { marginRight: -(value) },
      [`-mb-${key}`]: { marginBottom: -(value) },
      [`-ml-${key}`]: { marginLeft: -(value) },
      [`inset-${key}`]: { top: value, right: value, bottom: value, left: value },
      [`inset-y-${key}`]: { top: value, bottom: value },
      [`inset-x-${key}`]: { right: value, left: value },
      [`top-${key}`]: { top: value },
      [`right-${key}`]: { right: value },
      [`bottom-${key}`]: { bottom: value },
      [`left-${key}`]: { left: value },
      [`-top-${key}`]: { top: -(value) },
      [`-right-${key}`]: { right: -(value) },
      [`-bottom-${key}`]: { bottom: -(value) },
      [`-left-${key}`]: { left: -(value) },
    }
  })

  return spacingStyles
}

// custom borders processor
const customBorders = (object) => {
  let borderStyles = {}

  if (object?.width) {
    Object.entries(object).map(([key, value]) => {
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

  if (object?.radius) {
    Object.entries(object).map(([key, value]) => {
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
const customFonts = (object) => {
  let fontStyles = {}

  // mapping font family
  if (object?.family) {
    Object.entries(object?.family).map(([key, value]) => {
      fontStyles = {
        ...fontStyles,
        [`font-${key}`]: { fontFamily: value }
      }
    })
  }

  // mapping font size
  if (object?.size) {
    Object.entries(object?.size).map(([key, value]) => {
      fontStyles = {
        ...fontStyles,
        [`font-${key}`]: { fontSize: value }
      }
    })
  }

  return fontStyles
}

export default (customTheme) => {
  let finalObject = {}

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

  return finalObject
}
