import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

export default App;
