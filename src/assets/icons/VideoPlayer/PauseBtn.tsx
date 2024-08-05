import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../../constants/Colors';
const PauseBtn = props => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.5 14.25V3.75H13.5V14.25H10.5ZM4.5 14.25V3.75H7.5V14.25H4.5Z"
      fill="#FF7800"
    />
  </Svg>
);
export default PauseBtn;
