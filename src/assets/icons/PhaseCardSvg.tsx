import * as React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PhaseCardSvg = () => (
  <Svg width={290} height={164} viewBox="0 0 290 164" fill="none">
    <G filter="url(#filter0_d_431_1578)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 1.93776C32 1.74823 32.1536 1.59459 32.3431 1.59459H284C286.209 1.59459 288 3.38545 288 5.59459V156.595C288 158.804 286.209 160.595 284 160.595H32.0625C32.028 160.595 32 160.623 32 160.657C32 160.727 31.9035 160.744 31.879 160.679L2.53298 82.9123C2.18953 82.0022 2.18953 80.998 2.53298 80.0879L31.9779 2.05892C31.9925 2.0202 32 1.97915 32 1.93776Z"
        fill="url(#paint0_linear_431_1578)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_431_1578"
        x1={145.138}
        y1={1.59459}
        x2={145.138}
        y2={160.72}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#3B92D2" />
        <Stop offset={1} stopColor="#245093" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default PhaseCardSvg;
