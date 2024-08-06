import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import {AllModules, Journeys} from '../../screens';
import JourneyTabBar from '../tabBar/JourneyTabBar';

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
      <Stack.Screen component={JourneyTabBar} name="JourneyTabBar" />
    </Stack.Navigator>
  );
};

export default LibraryStack;
