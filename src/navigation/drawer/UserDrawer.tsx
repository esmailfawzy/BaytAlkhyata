import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {AllModules} from '../../screens';
import DrawerContent from '../../components/Drawer/DrawerContent';

const Drawer = createDrawerNavigator();

export default function UserDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="AllModules" component={AllModules} />
      <Drawer.Screen name="Secondary" component={AllModules} />
    </Drawer.Navigator>
  );
}
