import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {observer} from 'mobx-react';
import {COLORS} from '../constants/Colors';
import SplashLogo from '../assets/icons/SplashLogo';
import GlobalStore from '../utils/GlobalStore';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JWT_TOKEN} from '../constants/AppConfig';

const SplashScreen = observer(() => {
  const navigation = useNavigation();

  useEffect(() => {
    getTokenFromStorage();
  }, []);

  const getTokenFromStorage = async () => {
    try {
      const token = await AsyncStorage.getItem(JWT_TOKEN);
      console.log('token', token);
      if (token !== null && token !== '' && typeof token !== 'undefined') {
        GlobalStore.setJWTToken(token);
        navigation.replace('UserDrawer');
      } else {
        GlobalStore.setJWTToken(null);
        navigation.replace('OnboardingStack');
      }
    } catch (error) {
      console.log('error from getTokenFromStorage', error);
    }
  };

  const navigator = () => {};

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
