import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const PlayIcon = ({color}: {color: string}) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M4.16667 2.5L15.8333 10L4.16667 17.5V2.5Z"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PlayIcon;
