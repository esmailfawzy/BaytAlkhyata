import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FullScreen: React.FC<{props?: any}> = ({props}) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.25 2.25H15.75M15.75 2.25V6.75M15.75 2.25L10.5 7.5M6.75 15.75H2.25M2.25 15.75V11.25M2.25 15.75L7.5 10.5"
      stroke="#FF7800"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default FullScreen;
