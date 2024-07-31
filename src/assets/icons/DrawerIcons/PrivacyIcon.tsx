import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const PrivacyIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_431_2073)">
      <Path
        d="M20 12V5.749C20.0001 5.67006 19.9845 5.59189 19.9543 5.51896C19.9241 5.44603 19.8798 5.37978 19.824 5.324L16.676 2.176C16.5636 2.06345 16.4111 2.00014 16.252 2H4.6C4.44087 2 4.28826 2.06321 4.17574 2.17574C4.06321 2.28826 4 2.44087 4 2.6V21.4C4 21.5591 4.06321 21.7117 4.17574 21.8243C4.28826 21.9368 4.44087 22 4.6 22H13M8 10H16M8 6H12M8 14H11"
        stroke="#FF7800"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 16V19.4C13 19.5591 13.0632 19.7117 13.1757 19.8243C13.2883 19.9368 13.4409 20 13.6 20H17M16.992 29.125L19.548 29.774C19.814 29.842 20.001 30.084 19.993 30.358C19.821 36.116 16.5 37 16.5 37C16.5 37 13.179 36.116 13.007 30.358C13.0043 30.2247 13.0468 30.0944 13.1276 29.9883C13.2084 29.8823 13.3227 29.8067 13.452 29.774L16.008 29.125C16.331 29.043 16.669 29.043 16.992 29.125Z"
        stroke="#FF7800"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_431_2073">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PrivacyIcon;
