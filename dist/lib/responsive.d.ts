/**
 * marudy/react-native-responsive-screen
 *
 * (c) Tasos Maroudas <tasos.maroudas@codedlines.com>
 *
 * https://codedlines.com
 */
import { Component } from 'react';
/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {number} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
declare const scaleWidth: (widthPercent: number) => number;
/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {number} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
declare const scaleHeight: (heightPercent: number) => number;
/**
 * Detect osmi style and Convert it into Width / Heihgt / Font Size
 * @param {array} array from split string "/" with type and value
 * @return {object} object style width / height /font size
 */
declare const convertResponsive: ([type, value]: string[]) => object | undefined;
/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {object} that Screen's class component this variable. The function needs it to
 *                      invoke setState method and trigger screen rerender (this.setState()).
 */
declare const listenOrientationChange: (that: Component) => void;
/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
declare const removeOrientationListener: () => void;
export { scaleWidth, scaleHeight, convertResponsive, listenOrientationChange, removeOrientationListener };
