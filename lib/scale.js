import { Dimensions } from 'react-native'

const scaleWidth = (scaleWidth) => {
  const { width } = Dimensions.get('window')
  return (scaleWidth * width) / 180
}

const scaleHeight = (scaleHeight) => {
  const { height } = Dimensions.get('window')
  return (scaleHeight * height) / 180
}

export {
  scaleWidth,
  scaleHeight
}
