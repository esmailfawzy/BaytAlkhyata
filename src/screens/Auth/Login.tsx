import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import {IMGS} from '../../assets';
import {RPH, RPW} from '../../utils/ScreenSize';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import LogoSvg from '../../assets/imgs/Logo';
import {FONTS} from '../../constants/Fonts';
import {AuthInput, CustomBtn} from '../../components';
import SignupStore from './Stores/SignupStore';
import {observer} from 'mobx-react';

type Navigators = {
  ForgetPassword: {screen: string} | undefined;
  Signup: {screen: string} | undefined;
};

const Login = () => {
  const navigation = useNavigation<NavigationProp<Navigators> & any>();

  const signinPressed = async () => {
    // navigation.replace('UserDrawer', {
    //   screen: 'AllModules',
    // });
    const result = await SignupStore.doLogin();
    if (result) {
      navigation.replace('UserDrawer', {
        screen: 'AllModules',
      });
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            paddingHorizontal: RPW(8),
          }}>
          <Image
            source={IMGS.Logo}
            resizeMode="contain"
            style={{
              width: RPW(40),
              height: RPH(35),
              opacity: 0.05,
              position: 'absolute',
              zIndex: -1,
              top: Platform.OS == 'android' ? RPW(-20) : RPW(-25),
              left: RPW(70),
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginVertical: Platform.OS == 'android' ? RPH(5) : RPH(3),
              width: '100%',
            }}>
            <LogoSvg height={113} width={96} />
          </View>

          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 25,
              fontWeight: 'bold',
              color: COLORS.main,
              marginBottom: 4,
            }}>
            مرحبًا مجددا !
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 14,
              fontWeight: '500',
              color: '#939393',
              marginBottom: RPH(5),
            }}>
            قم بتسجيل الدخول لتتمكن من استكمال رحلتك.
          </Text>

          <View
            style={{
              flex: 1,
              // alignItems: 'center',
              alignSelf: 'center',
              width: '100%',
              // justifyContent: 'space-around',
            }}>
            <AuthInput
              keyboardType="phone-pad"
              required={false}
              placeholder="رقم الهاتف"
              value={SignupStore.phoneNumber}
              onChangeText={value => SignupStore.setPhoneNumber(value)}
            />
            <View style={{marginBottom: RPW(6)}} />
            <AuthInput
              keyboardType="default"
              required
              placeholder="كلمة المرور"
              secureText
              value={SignupStore.password}
              onChangeText={value => SignupStore.setPassword(value)}
            />
            <View style={{marginBottom: RPW(6)}} />
            <Text
              onPress={() => {
                navigation.navigate('ForgetPassword');
              }}
              style={{
                fontFamily: FONTS.Manuale,
                color: COLORS.main,
                fontSize: 10,
                fontWeight: '500',
                textAlign: 'right',
              }}>
              هل نسيت كلمة المرور؟
            </Text>
            <View style={{marginBottom: RPW(20)}} />
            <CustomBtn
              backgroundColor={COLORS.white}
              title="تسجيل الدخول"
              onPress={signinPressed}
              titleColor={COLORS.main}
              borderWidth={1}
            />
            <View style={{marginBottom: RPW(5)}} />
            <Text
              style={{
                fontFamily: FONTS.Manuale,
                color: '#555555',
                fontSize: 14,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              ليس لديك حساب؟{' '}
              <Text
                onPress={() => {
                  navigation.navigate('Signup');
                }}
                style={{
                  color: COLORS.main,
                }}>
                قم بانشاء حساب جديد
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Login);

const styles = StyleSheet.create({});
