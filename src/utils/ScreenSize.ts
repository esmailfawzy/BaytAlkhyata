import { Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const RPW = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};

const RPH = (percentage: number) => {
return (percentage / 100) * screenHeight; 
};

export {
  RPH,
  RPW,
}