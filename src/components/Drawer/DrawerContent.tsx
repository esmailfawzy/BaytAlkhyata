import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {RPH, RPW} from '../../utils/ScreenSize';
import MenuIcon from '../../assets/icons/MenuIcon';
import {CONSTANTS} from '../../constants/Constants';
import DrawerBtn from './DrawerBtn';
import {DrawerIcons} from '../../assets/icons/DrawerIcons';
import {COLORS} from '../../constants/Colors';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();

  // Get the current route name
  const currentRouteName = props.state.routeNames[props.state.index];

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'space-around',
          padding: RPW(8),
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
          style={{
            marginBottom: RPH(6),
            alignSelf: 'flex-start',
          }}
          activeOpacity={CONSTANTS.activeOpacity}>
          <MenuIcon />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            marginBottom: RPH(8),
          }}>
          <DrawerBtn
            title={'الملف الشخصي'}
            icon={<DrawerIcons.ProfileIcon />}
            color={currentRouteName == 'Profile' ? '#FF780040' : COLORS.white}
            onPress={() => {
              props.navigation.jumpTo('Profile');
            }}
          />
          <DrawerBtn
            title={'المكتبة'}
            icon={<DrawerIcons.LibraryIcon />}
            color={
              currentRouteName == 'LibraryStack' ? '#FF780040' : COLORS.white
            }
            onPress={() => {
              props.navigation.jumpTo('LibraryStack', {
                screen: 'AllModules',
              });
            }}
          />
          <DrawerBtn
            title={'دعوة صديق'}
            icon={<DrawerIcons.InviteIcon />}
            color={
              currentRouteName == 'InviteFriend' ? '#FF780040' : COLORS.white
            }
            onPress={() => {
              props.navigation.jumpTo('InviteFriend');
            }}
          />
          <DrawerBtn
            title={'حجز محاضرة لايف'}
            icon={<DrawerIcons.CalenderIcon />}
            color={
              currentRouteName == 'ReserveLecture' ? '#FF780040' : COLORS.white
            }
            onPress={() => {
              props.navigation.jumpTo('ReserveLecture');
            }}
          />
          <DrawerBtn
            title={'سياسة الخصوصية والامان'}
            icon={<DrawerIcons.PrivacyIcon />}
            color={
              currentRouteName == 'PrivacyPolicy' ? '#FF780040' : COLORS.white
            }
            onPress={() => {
              props.navigation.jumpTo('PrivacyPolicy');
            }}
          />
          <DrawerBtn
            title={'متجر الهدايا'}
            icon={<DrawerIcons.PrivacyIcon />}
            color={currentRouteName == 'GiftStore' ? '#FF780040' : COLORS.white}
            onPress={() => {
              props.navigation.jumpTo('GiftStore');
            }}
          />
        </View>
        <DrawerBtn
          title={'تسجيل الخروج'}
          icon={<DrawerIcons.LogoutIcon />}
          color={COLORS.white}
          onPress={() => {
            props.navigation.navigate('AuthStack');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
