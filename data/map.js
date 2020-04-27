// Colors
import colors from './colors.json'

// Spacing
import padding from '../src/padding';
import margin from '../src/margin';

// Typography
import textColor from '../src/text-color';
import textSize from '../src/text-size';
import textResponsive from "../src/text-responsive";
import textAlign from '../src/text-align';
import textStyle from '../src/text-style';
import textTransform from '../src/text-transform';
import letterSpacing from '../src/letter-spacing';
import lineHeight from '../src/line-height';
import verticalAlign from '../src/vertical-align';

// Background Color
import backgroundColor from '../src/background-color';

// Flex
import flex from '../src/flex';
import flexWrap from '../src/flex-wrap';
import flexDirection from '../src/flex-direction';
import flexGrow from '../src/flex-grow';
import flexShrink from '../src/flex-shrink';
import alignItems from '../src/align-items';
import alignContent from '../src/align-content';
import alignSelf from '../src/align-self';
import justifyContent from '../src/justify-content';

// Border
import borderColor from '../src/border-color';
import borderStyle from '../src/border-style';
import borderWidth from '../src/border-width';
import borderRadius from '../src/border-radius';

// Effect
import shadow from '../src/shadow';
import opacity from '../src/opacity';

// Transform
import rotate from '../src/rotate';

// Position
import position from '../src/position';

// Overflow
import overflow from '../src/overflow';

// Resize (only for image)
import resizeMode from '../src/resize-mode';

// Inset
import trbl from '../src/trbl';

// Z-Index
import zIndex from '../src/z-index';

/**
 * Mapping all styles
 */
export default {
  // Colors
  ...colors,

  // Spacing
  ...padding,
  ...margin,

  // Typography
  ...textSize,
  ...textResponsive,
  ...textColor,
  ...textAlign,
  ...textStyle,
  ...textTransform,
  ...letterSpacing,
  ...lineHeight,
  ...verticalAlign,

  // Background Color
  ...backgroundColor,

  // Flex
  ...flex,
  ...flexWrap,
  ...flexDirection,
  ...flexGrow,
  ...flexShrink,
  ...alignItems,
  ...alignContent,
  ...alignSelf,
  ...justifyContent,

  // Border
  ...borderColor,
  ...borderStyle,
  ...borderWidth,
  ...borderRadius,

  // Effect
  ...shadow,
  ...opacity,

  // Transform
  ...rotate,

  // Position
  ...position,

  // Overflow
  ...overflow,

  // Resize (only for image)
  ...resizeMode,

  // Inset
  ...trbl,

  // Z-Index
  ...zIndex
};
