/**
 * ptelad/react-native-iphone-x-helper
 *
 * (c) Elad Gil
 */
import { Dimensions, Platform } from "react-native";

export const isIphoneX = (): boolean => {
  const { height, width } = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((height >= 780 && height <= 926) || width === 428)
  );
};
