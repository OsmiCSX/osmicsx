import React, { PureComponent, FC, useMemo, useState } from "react";
import { OsmiContext } from "./context";
import { osmiPredfined } from "../predefined/map";
import { customProcessor } from "../processor/multiThemeProcessor";

// Import Scale Utility
import { scaleWidth, scaleHeight } from "../lib/responsive";

// Types
import type { CustomThemeType } from "../processor/processor.type";
import type { Mode } from "./context";

interface OsmiProviderProps {
  theme?: CustomThemeType;
}

// interface OsmiProviderState {
//   mode: keyof typeof Mode;
//   theme: Record<string, object | string>;
// }

// export class OsmiProvider extends PureComponent<
//   OsmiProviderProps,
//   OsmiProviderState
// > {
//   // static switchMode = (newMode: keyof typeof Mode) => void

//   constructor(props: OsmiProviderProps) {
//     super(props);

//     this.state = {
//       mode: "system",
//       theme:
//         props?.theme !== undefined
//           ? {
//               ...osmiPredfined,
//               ...customProcessor(props?.theme),
//             }
//           : osmiPredfined,
//     };
//   }

//   switchMode = (newMode: keyof typeof Mode) => {
//     this.setState({
//       ...this.state,
//       mode: newMode,
//     });
//   };

//   render() {
//     return (
//       <OsmiContext.Provider
//         value={{
//           ...this.state,
//           switchMode: this.switchMode,
//           scaleWidth,
//           scaleHeight,
//         }}
//       >
//         {this.props.children}
//       </OsmiContext.Provider>
//     );
//   }
// }

export const OsmiProvider: FC<OsmiProviderProps> = (props) => {
  const [mode, setMode] = useState<keyof typeof Mode>("system");
  const switchMode = (newMode: keyof typeof Mode) => {
    setMode(newMode);
  };

  const theme = useMemo(() => {
    return props?.theme !== undefined
      ? {
          ...osmiPredfined,
          ...customProcessor(props?.theme),
        }
      : osmiPredfined;
  }, [props.theme]);

  return (
    <OsmiContext.Provider
      value={{ mode, switchMode, theme, scaleWidth, scaleHeight }}
    >
      {props.children}
    </OsmiContext.Provider>
  );
};
