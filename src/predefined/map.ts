// Colors
import * as colors from "./colors.json";

// Spacing
import * as padding from "./padding.json";
import * as margin from "./margin.json";

// Typography
import textColor from "./text-color";
import * as textSize from "./text-size.json";
import textResponsive from "./text-responsive";
import * as textAlign from "./text-align.json";
import * as textStyle from "./text-style.json";
import * as textTransform from "./text-transform.json";
import * as letterSpacing from "./letter-spacing.json";
import * as lineHeight from "./line-height.json";
import * as verticalAlign from "./vertical-align.json";

// Background Color
import backgroundColor from "./background-color";

// Flex
import * as flex from "./flex.json";
import * as flexWrap from "./flex-wrap.json";
import * as flexDirection from "./flex-direction.json";
import * as flexGrow from "./flex-grow.json";
import * as flexShrink from "./flex-shrink.json";
import * as alignItems from "./align-items.json";
import * as alignContent from "./align-content.json";
import * as alignSelf from "./align-self.json";
import * as justifyContent from "./justify-content.json";

// Border
import borderColor from "./border-color";
import * as borderStyle from "./border-style.json";
import * as borderWidth from "./border-width.json";
import * as borderRadius from "./border-radius.json";

// Effect
import * as shadow from "./shadow.json";
import * as opacity from "./opacity.json";

// Transform
import * as rotate from "./rotate.json";

// Position
import * as position from "./position.json";

// Overflow
import * as overflow from "./overflow.json";

// Resize (only for image)
import * as resizeMode from "./resize-mode.json";

// Inset
import * as trbl from "./trbl.json";

// Z-Index
import * as zIndex from "./z-index.json";

/**
 * Mapping all styles
 */
export const osmiPredfined: Record<string, object | string> = {
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
  ...zIndex,
};
