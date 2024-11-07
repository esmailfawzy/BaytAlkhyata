import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {observer} from 'mobx-react';
import {COLORS} from '../constants/Colors';
import SplashLogo from '../assets/icons/SplashLogo';
import GlobalStore from '../utils/GlobalStore';
import {
  NavigationAction,
  NavigationProp,
  NavigationState,
  useNavigation,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JWT_TOKEN} from '../constants/AppConfig';
import ProfileStore from './User/Drawer/Profile/ProfileStore';
import GiftstoreStore from './User/Drawer/GiftStore/GiftstoreStore';
import LibraryStore from './User/Drawer/Library/LibraryStore';
import QuizViewStore from './User/TabBar/Quiz/Stores/QuizViewStore';
import ChatStore from './User/TabBar/ContactUs/Store/ChatStore';
import DiplomasStore from './User/Drawer/Journeys/Stores/DiplomasStore';
import Orientation from 'react-native-orientation-locker';

type Navigators = {
  UserDrawer: {screen: string} | undefined;
  OnboardingStack: {screen: string} | undefined;
};

const SplashScreen = observer(() => {
  const navigation = useNavigation<NavigationProp<Navigators> & any>();

  useEffect(() => {
    getTokenFromStorage();
    Orientation.lockToPortrait();
  }, []);

  const getTokenFromStorage = async () => {
    try {
      const token = await AsyncStorage.getItem(JWT_TOKEN);
      if (token !== null && token !== '' && typeof token !== 'undefined') {
        GlobalStore.setJWTToken(token);
        console.log(token);
        getAllData();
        navigation.replace('UserDrawer');
      } else {
        GlobalStore.setJWTToken(null);
        navigation.replace('OnboardingStack');
      }
    } catch (error) {
      console.error('error from getTokenFromStorage', error);
    }
  };

  const getAllData = async () => {
    try {
      await Promise.all([
        ProfileStore.getProfile(),
        DiplomasStore.getAllDiplomas(),
        DiplomasStore.getStudentDiplomas(),
        GiftstoreStore.getAllProducts(),
        LibraryStore.getAllBooks(),
        ChatStore.getFAQ(),
      ]).then(res => {
        console.log('done getting the data', res);
      });
    } catch (error) {
      console.error('There is an error in Promis.all ', error);
    }
  };
  // const navigator = () => {};

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SplashLogo />
    </SafeAreaView>
  );
});

export default SplashScreen;

const styles = StyleSheet.create({});
