export interface BackgroundDark {
  backgroundColor: string
}

export interface BorderDark {
  borderColor: string
}

export interface TextDark {
  color: string
}

export type CustomColors = Record<string, string>

export type CustomSpacing = Record<string|number, number>

export type CustomLineHeight = Record<string|number, number>

export type CustomLetterSpacing = Record<string|number, number>

export type CustomBorder = {
  width?: Record<string|number, number>,
  radius?: Record<string|number, number>
}

export type CustomFonts = {
  family?: Record<string, string>,
  size?: Record<string|number, number>
}

export type Shadow = {
  shadowColor: string,
  shadowOffset: {
    width: number,
    height: number
  },
  shadowOpacity: number,
  shadowRadius: number,
  elevation: number
}

export type CustomShadow = Record<string|number, Shadow>

export type CustomThemeType = {
  colors?: CustomColors,
  spacing?: CustomSpacing,
  border?: CustomBorder,
  font?: CustomFonts,
  lineHeight?: CustomLineHeight,
  letterSpacing?: CustomLetterSpacing,
  shadow?: CustomShadow,
}
