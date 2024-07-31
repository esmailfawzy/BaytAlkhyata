import * as React from 'react';
import Svg, {Line} from 'react-native-svg';
const MenuIcon = (): React.JSX.Element => (
  <Svg
    width={16}
    height={13}
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Line y1={0.5} x2={16} y2={0.5} stroke="black" />
    <Line y1={6.5} x2={16} y2={6.5} stroke="black" />
    <Line y1={12.5} x2={16} y2={12.5} stroke="black" />
  </Svg>
);
export default MenuIcon;
