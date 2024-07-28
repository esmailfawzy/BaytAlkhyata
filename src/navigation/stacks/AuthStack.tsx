import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgetPassword, Login, OTP, Signup} from '../../screens';

const Stack = createStackNavigator();

function AuthStack(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
}

export default AuthStack;
