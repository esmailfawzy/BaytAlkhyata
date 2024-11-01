import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingStack from './navigation/stacks/OnboardingStack';
import AuthStack from './navigation/stacks/AuthStack';
import UserDrawer from './navigation/drawer/UserDrawer';
import './sheets';
import {observer} from 'mobx-react';
import GlobalStore from './utils/GlobalStore';
import SplashScreen from './screens/SplashScreen';
import PDFViewer from './screens/User/Drawer/Library/PDFViewer';

const Stack = createStackNavigator();

const Main = observer((): React.JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="UserDrawer" component={UserDrawer} />
      <Stack.Screen
        name="PDFViewer"
        component={PDFViewer}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
});

export default Main;

const styles = StyleSheet.create({});
