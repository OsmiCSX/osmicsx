/**
 * marudy/react-native-responsive-screen
 *
 * (c) Tasos Maroudas <tasos.maroudas@codedlines.com>
 *
 * https://codedlines.com
 */
import { Component } from 'react';
import { Dimensions, PixelRatio } from 'react-native';

// Retrieve initial screen's width & height
let screenWidth: number = Dimensions.get('window').width;
let screenHeight: number = Dimensions.get('window').height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {number} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const scaleWidth = (widthPercent: number): number => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(screenWidth * widthPercent / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {number} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const scaleHeight = (heightPercent: number): number => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(screenHeight * heightPercent / 100);
};

/**
 * Detect osmi style and Convert it into Width / Heihgt / Font Size
 * @param {array} array from split string "/" with type and value
 * @return {object} object style width / height / font size
 */
const convertResponsive = ([type, value]: string[]): object | undefined => {
  switch(type) {
    case "w":
      return {
        width: scaleWidth(Number(value))
      }

    case "h":
      return {
        height: scaleHeight(Number(value))
      }

    case "text":
      return {
        fontSize: scaleWidth(Number(value))
      }

    case "min-w":
      return {
        minWidth: scaleWidth(Number(value))
      }

    case "min-h":
      return {
        minHeight: scaleHeight(Number(value))
      }

    case "max-w":
      return {
        maxWidth: scaleWidth(Number(value))
      }

    case "max-h":
      return {
        maxHeight: scaleHeight(Number(value))
      }

    default:
      console.warn(`OsmiCSX Responsive: Undefined type of ${type}}`)
      return undefined
  }
}

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {object} that Screen's class component this variable. The function needs it to
 *                      invoke setState method and trigger screen rerender (this.setState()).
 */
const listenOrientationChange = (that: Component) => {
  Dimensions.addEventListener('change', newDimensions => {
    // Retrieve and save new dimensions
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;

    // Trigger screen's rerender with a state update of the orientation variable
    that.setState({
      orientation: screenWidth < screenHeight ? 'portrait' : 'landscape'
    });
  });
};

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};

export {
  scaleWidth,
  scaleHeight,
  convertResponsive,
  listenOrientationChange,
  removeOrientationListener
};
