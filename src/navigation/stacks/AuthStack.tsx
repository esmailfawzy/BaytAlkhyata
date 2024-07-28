import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgetPassword, Login, Signup} from '../../screens';

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
    </Stack.Navigator>
  );
}

export default AuthStack;
