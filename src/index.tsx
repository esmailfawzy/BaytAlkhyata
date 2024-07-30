import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingStack from './navigation/stacks/OnboardingStack';
import AuthStack from './navigation/stacks/AuthStack';
import UserDrawer from './navigation/drawer/UserDrawer';

const Stack = createStackNavigator();

function Main(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="UserDrawer" component={UserDrawer} />
    </Stack.Navigator>
  );
}

export default Main;

const styles = StyleSheet.create({});
