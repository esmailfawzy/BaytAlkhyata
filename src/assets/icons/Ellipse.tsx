import * as React from 'react';
import {View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
const Ellipse = (): React.JSX.Element => (
  <View
    style={{
      opacity: 0.5,
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
    }}>
    <Svg
      width={125}
      height={284}
      viewBox="0 0 125 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx={142} cy={142} r={142} fill="#FFE3BF" />
    </Svg>
  </View>
);
export default Ellipse;
