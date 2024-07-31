import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {
  AllModules,
  GiftStore,
  InviteFriend,
  PrivacyPolicy,
  Profile,
  ReserveLecture,
} from '../../screens';
import DrawerContent from '../../components/Drawer/DrawerContent';
import {Platform, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {DrawerIcons} from '../../assets/icons/DrawerIcons';
import {RPW} from '../../utils/ScreenSize';
import MenuIcon from '../../assets/icons/MenuIcon';
import {CONSTANTS} from '../../constants/Constants';

const Drawer = createDrawerNavigator();

export default function UserDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        header: props => (
          <SafeAreaView
            style={{
              width: RPW(100),
            }}>
            <View
              style={{
                width: RPW(100),
                paddingHorizontal: RPW(8),
                paddingBottom: RPW(3),
                paddingTop: Platform.OS == 'android' ? RPW(3) : 0,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                alignSelf: 'center',
                borderBottomColor: '#D9D9D9',
                borderBottomWidth: 1,
              }}>
              <TouchableOpacity
                activeOpacity={CONSTANTS.activeOpacity}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}>
                <MenuIcon />
              </TouchableOpacity>
              <DrawerIcons.MiniLogo />
            </View>
          </SafeAreaView>
        ),
      }}
      initialRouteName="AllModules"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="AllModules" component={AllModules} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="InviteFriend" component={InviteFriend} />
      <Drawer.Screen name="ReserveLecture" component={ReserveLecture} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="GiftStore" component={GiftStore} />
    </Drawer.Navigator>
  );
}
