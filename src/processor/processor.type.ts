export interface BackgroundDark {
  backgroundColor: string
}

export interface BorderDark {
  borderColor: string
}

export interface TextDark {
  color: string
}

export type CustomColors = {
  [key: string]: string
}

export type CustomSpacing = {
  [key: string]: number;
  [key: number]: number
}

export type CustomLineHeight = {
  [key: string]: number;
  [key: number]: number;
}

export type CustomLetterSpacing = {
  [key: string]: number;
  [key: number]: number;
}

export type CustomBorder = {
  width?: {
    [key: string]: number;
    [key: number]: number;
  },
  radius?: {
    [key: string]: number;
    [key: number]: number;
  }
}

export type CustomFonts = {
  family?: {
    [key: string]: string
  },
  size?: {
    [key: string]: number
  }
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

export type CustomShadow = {
  [key: string]: Shadow;
  [key: number]: Shadow
}

export type CustomTheme = {
  colors?: CustomColors,
  spacing?: CustomSpacing,
  border?: CustomBorder,
  font?: CustomFonts,
  lineHeight?: CustomLineHeight,
  letterSpacing?: CustomLetterSpacing,
  shadow?: CustomShadow,
}
