import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import {AllModules, Journeys} from '../../screens';

const Stack = createStackNavigator();

const LibraryStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: TransitionSpecs.BottomSheetSlideInSpec,
          close: TransitionSpecs.BottomSheetSlideOutSpec,
        },
      }}>
      <Stack.Screen component={AllModules} name="AllModules" />
      <Stack.Screen component={Journeys} name="Journeys" />
    </Stack.Navigator>
  );
};

export default LibraryStack;
