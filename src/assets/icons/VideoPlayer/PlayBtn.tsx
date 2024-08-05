import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const PlayBtn = props => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.75 2.25L14.25 9L3.75 15.75V2.25Z"
      stroke="#FF7800"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PlayBtn;
