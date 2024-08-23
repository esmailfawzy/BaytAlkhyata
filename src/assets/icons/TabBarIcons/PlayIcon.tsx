import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const PlayIcon = ({color}: {color: string}) => (
  <Svg
    width={23}
    height={24}
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M20.1098 9.1324C20.6301 9.4091 21.0653 9.82215 21.3688 10.3273C21.6723 10.8325 21.8327 11.4107 21.8327 12C21.8327 12.5893 21.6723 13.1675 21.3688 13.6727C21.0653 14.1778 20.6301 14.5909 20.1098 14.8676L6.23008 22.4152C3.99517 23.6317 1.25 22.0501 1.25 19.5487V4.4524C1.25 1.9499 3.99517 0.369321 6.23008 1.58374L20.1098 9.1324Z"
      stroke={color}
      strokeWidth={1.5}
    />
  </Svg>
);
export default PlayIcon;
