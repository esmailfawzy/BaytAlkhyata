import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import {IMGS} from '../../assets';
import {RPH, RPW} from '../../utils/ScreenSize';
import ChevronRight from '../../assets/icons/ChevronRight';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import LogoSvg from '../../assets/imgs/Logo';
import {CONSTANTS} from '../../constants/Constants';
import {FONTS} from '../../constants/Fonts';
import {AuthInput, CustomBtn} from '../../components';
import {observer} from 'mobx-react';
import SignupStore from './Stores/SignupStore';

type NavigatoinNames = {
  OnboardingStack: {screen: string} | undefined;
  UserDrawer: {screen: string} | undefined;
  Login: {screen: string} | undefined;
};

const Signup = observer(() => {
  const navigation = useNavigation<NavigationProp<NavigatoinNames>>();

  const signupPressed = async () => {
    // navigation.replace('UserDrawer', {
    //   screen: 'AllModules',
    // });
    const result = await SignupStore.doSignup();
    if (result) {
      navigation.navigate('Login');
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
              right: RPW(68),
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginVertical: Platform.OS == 'android' ? RPH(5) : RPH(3),
              width: '100%',
            }}>
            <TouchableOpacity
              activeOpacity={CONSTANTS.activeOpacity}
              onPress={() => {
                navigation.navigate('OnboardingStack', {
                  screen: 'Onboarding2',
                });
              }}>
              <ChevronRight />
            </TouchableOpacity>
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
            مرحبًا !
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 14,
              fontWeight: '500',
              color: '#939393',
              marginBottom: RPH(5),
            }}>
            قم بانشاء حساب جديد لتبدأ رحلتك!
          </Text>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              alignSelf: 'center',
              width: '100%',
              // justifyContent: 'space-around',
            }}>
            <AuthInput
              keyboardType="default"
              required
              placeholder="الاسم ثلاثي"
              value={Signup.name}
              onChangeText={value => SignupStore.setName(value)}
            />
            <View style={{marginBottom: RPW(6)}} />
            <AuthInput
              keyboardType="email-address"
              required={false}
              placeholder="البريد الالكتروني"
              value={Signup.name}
              onChangeText={value => SignupStore.setEmail(value)}
            />
            <View style={{marginBottom: RPW(6)}} />
            <AuthInput
              keyboardType="phone-pad"
              required
              placeholder="رقم الهاتف (واتس اب )"
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
            <AuthInput
              keyboardType="default"
              required
              placeholder="تأكيد كلمة المرور"
              secureText
              value={SignupStore.re_password}
              onChangeText={value => SignupStore.setRePassword(value)}
            />
            <View style={{marginBottom: RPW(6)}} />
            <CustomBtn
              backgroundColor={COLORS.main}
              title="انشاء الحساب"
              onPress={signupPressed}
              titleColor={COLORS.white}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default Signup;

const styles = StyleSheet.create({});
