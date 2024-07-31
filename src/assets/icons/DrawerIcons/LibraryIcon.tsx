import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const LibraryIcon = () => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#clip0_431_2061)">
      <Path
        d="M0 6L10 0L20 6V8H0V6ZM0 18H20V20H0V18ZM2 16H18V18H2V16ZM2 8H6V16H2V8ZM8 8H12V16H8V8ZM14 8H18V16H14V8Z"
        stroke="#FF7800"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_431_2061">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LibraryIcon;
