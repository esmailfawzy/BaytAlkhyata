import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src';
import {SheetProvider} from 'react-native-actions-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView
        style={{
          flex: 1,
        }}>
        <SheetProvider context="global">
          <Main />
        </SheetProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
