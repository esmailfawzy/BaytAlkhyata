import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding1, Onboarding2} from '../../screens';

const Stack = createStackNavigator();

function OnboardingStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
    </Stack.Navigator>
  );
}

export default OnboardingStack;
