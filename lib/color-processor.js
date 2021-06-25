import colors from '../data/colors.json'

export const backgroundColorProcessor = (type) => ({
  backgroundColor: colors[type]
})

export const borderColorProcessor = (type) => ({
  borderColor: colors[type]
})

export const textColorProcessor = (type) => ({
  color: colors[type]
})
