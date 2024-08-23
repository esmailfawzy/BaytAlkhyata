import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LessonArrow = props => (
  <Svg
    width={25}
    height={9}
    viewBox="0 0 25 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 0L10.0012 8.00098C11.4621 9.16968 13.5379 9.16968 14.9988 8.00098L25 1.09278e-06L0 0Z"
      fill="#FF7800"
    />
  </Svg>
);
export default LessonArrow;
