/**
 * marudy/react-native-responsive-screen
 *
 * (c) Tasos Maroudas <tasos.maroudas@codedlines.com>
 *
 * https://codedlines.com
 */
import { Component } from "react";
import { Dimensions, PixelRatio, ScaledSize } from "react-native";

// Retrieve initial screen's width & height
let screenWidth: number = Dimensions.get("window").width;
let screenHeight: number = Dimensions.get("window").height;
let dimensionOnChange: { remove: () => void } | null = null;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {number} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const scaleWidth = (widthPercent: number): number => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {number} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const scaleHeight = (heightPercent: number): number => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};

/**
 * Detect osmi style and Convert it into Width / Height / Font Size
 * @param {string[]} array from split string "/" with type and value
 * @return {object | undefined} object style width / height / font size
 */
const convertResponsive = ([type, value]: string[]): object | undefined => {
  const numericValue = Number(value);
  if (isNaN(numericValue)) {
    console.warn(`OsmiCSX Responsive: Value is not a number ${value}`);
    return undefined;
  }

  switch (type) {
    case "w":
      return { width: scaleWidth(numericValue) };
    case "h":
      return { height: scaleHeight(numericValue) };
    case "text":
      return { fontSize: scaleWidth(numericValue) };
    case "min-w":
      return { minWidth: scaleWidth(numericValue) };
    case "min-h":
      return { minHeight: scaleHeight(numericValue) };
    case "max-w":
      return { maxWidth: scaleWidth(numericValue) };
    case "max-h":
      return { maxHeight: scaleHeight(numericValue) };
    default:
      console.warn(`OsmiCSX Responsive: Undefined type of ${type}`);
      return undefined;
  }
};

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {Component} that Screen's class component this variable. The function needs it to
 *                      invoke setState method and trigger screen rerender (this.setState()).
 */
const listenOrientationChange = (that: Component) => {
  dimensionOnChange?.remove();
  dimensionOnChange = Dimensions.addEventListener(
    "change",
    (newDimensions: { window: ScaledSize; screen: ScaledSize }) => {
      // Retrieve and save new dimensions
      screenWidth = newDimensions.window.width;
      screenHeight = newDimensions.window.height;

      // Trigger screen's rerender with a state update of the orientation variable
      that.setState({
        orientation: screenWidth < screenHeight ? "portrait" : "landscape",
      });
    }
  );
};

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const removeOrientationListener = () => {
  dimensionOnChange?.remove();
  dimensionOnChange = null;
};

export {
  scaleWidth,
  scaleHeight,
  convertResponsive,
  listenOrientationChange,
  removeOrientationListener,
};
