import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SoundOn = props => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.3025 3.6975C15.7085 5.10396 16.4984 7.01127 16.4984 9C16.4984 10.9887 15.7085 12.896 14.3025 14.3025M11.655 6.345C12.358 7.04823 12.7529 8.00188 12.7529 8.99625C12.7529 9.99061 12.358 10.9443 11.655 11.6475M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
      stroke="#FF7800"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SoundOn;
