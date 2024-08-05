import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const SoundOff = props => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_3_98)">
      <Path
        d="M17.25 6.75L12.75 11.25M12.75 6.75L17.25 11.25M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
        stroke="#FF7800"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_98">
        <Rect width={18} height={18} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SoundOff;
