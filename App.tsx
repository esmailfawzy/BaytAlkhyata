import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src';
import {SheetProvider} from 'react-native-actions-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JWT_TOKEN} from './src/constants/AppConfig';
import {observer} from 'mobx-react';
import GlobalStore from './src/utils/GlobalStore';

const App = observer((): React.JSX.Element => {
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
});

export default App;
