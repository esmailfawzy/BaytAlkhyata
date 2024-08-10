import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import React from 'react';
import {AllModules, Journeys} from '../../screens';
import JourneyTabBar from '../tabBar/JourneyTabBar';
import JourneyHome from '../../screens/User/TabBar/JourneyHome/JourneyHome';

const Stack = createStackNavigator();

const JourneyStack = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: TransitionSpecs.BottomSheetSlideInSpec,
          close: TransitionSpecs.BottomSheetSlideOutSpec,
        },
      }}>
      <Stack.Screen name="Journeys" component={Journeys} />
      <Stack.Screen name="JourneyHome" component={JourneyHome} />
    </Stack.Navigator>
  );
};

export default JourneyStack;
