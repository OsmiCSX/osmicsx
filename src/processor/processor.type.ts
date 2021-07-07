export interface BackgroundDark {
  backgroundColor: string
}

export interface BorderDark {
  borderColor: string
}

export interface TextDark {
  color: string
}

export interface CustomBorder {
  width?: object,
  radius?: object
}

export interface CustomFonts {
  family?: object,
  size?: object
}

export interface Shadows {
  shadowColor: string,
  shadowOffset: {
    width: number,
    height: number
  },
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number
}

export interface CustomTheme {
  colors?: object,
  spacing?: object,
  border?: CustomBorder,
  font?: CustomFonts,
  lineHeight?: object,
  letterSpacing?: object,
  shadow?: Shadows
}
