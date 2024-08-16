import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PlayVideo from '../../screens/User/TabBar/PlayVideo/PlayVideo';

const Stack = createStackNavigator();

function PlayVideoStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PlayVideo" component={PlayVideo} />
    </Stack.Navigator>
  );
}

export default PlayVideoStack;
