"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeOrientationListener = exports.listenOrientationChange = exports.convertResponsive = exports.scaleHeight = exports.scaleWidth = void 0;
const react_native_1 = require("react-native");
// Retrieve initial screen's width & height
let screenWidth = react_native_1.Dimensions.get('window').width;
let screenHeight = react_native_1.Dimensions.get('window').height;
/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {number} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const scaleWidth = (widthPercent) => {
    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return react_native_1.PixelRatio.roundToNearestPixel(screenWidth * widthPercent / 100);
};
exports.scaleWidth = scaleWidth;
/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {number} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const scaleHeight = (heightPercent) => {
    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    return react_native_1.PixelRatio.roundToNearestPixel(screenHeight * heightPercent / 100);
};
exports.scaleHeight = scaleHeight;
/**
 * Detect osmi style and Convert it into Width / Heihgt / Font Size
 * @param {array} array from split string "/" with type and value
 * @return {object} object style width / height /font size
 */
const convertResponsive = ([type, value]) => {
    switch (type) {
        case "w":
            return {
                width: scaleWidth(Number(value))
            };
        case "h":
            return {
                height: scaleHeight(Number(value))
            };
        case "text":
            return {
                fontSize: scaleWidth(Number(value))
            };
        default:
            console.warn(`OsmiCSX Responsive: Undefined type of ${type}}`);
            return undefined;
    }
};
exports.convertResponsive = convertResponsive;
/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {object} that Screen's class component this variable. The function needs it to
 *                      invoke setState method and trigger screen rerender (this.setState()).
 */
const listenOrientationChange = (that) => {
    react_native_1.Dimensions.addEventListener('change', newDimensions => {
        // Retrieve and save new dimensions
        screenWidth = newDimensions.window.width;
        screenHeight = newDimensions.window.height;
        // Trigger screen's rerender with a state update of the orientation variable
        that.setState({
            orientation: screenWidth < screenHeight ? 'portrait' : 'landscape'
        });
    });
};
exports.listenOrientationChange = listenOrientationChange;
/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const removeOrientationListener = () => {
    react_native_1.Dimensions.removeEventListener('change', () => { });
};
exports.removeOrientationListener = removeOrientationListener;
//# sourceMappingURL=responsive.js.map