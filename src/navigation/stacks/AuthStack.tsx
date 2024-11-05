import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgetPassword, Login, OTP, Signup} from '../../screens';
import ChangePass from '../../screens/Auth/ChangePass';

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
      <Stack.Screen name="ChangePass" component={ChangePass} />
    </Stack.Navigator>
  );
}

export default AuthStack;
