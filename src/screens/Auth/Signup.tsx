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
import {useNavigation} from '@react-navigation/native';
import LogoSvg from '../../assets/imgs/Logo';
import {CONSTANTS} from '../../constants/Constants';
import {FONTS} from '../../constants/Fonts';
import {AuthInput, CustomBtn} from '../../components';

const Signup = () => {
  const navigation = useNavigation();
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
                navigation.goBack();
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
            />
            <View style={{marginBottom: RPW(6)}} />
            <AuthInput
              keyboardType="email-address"
              required={false}
              placeholder="البريد الالكتروني"
            />
            <View style={{marginBottom: RPW(6)}} />
            <AuthInput
              keyboardType="phone-pad"
              required
              placeholder="رقم الهاتف (واتس اب )"
            />
            <View style={{marginBottom: RPW(6)}} />
            <AuthInput
              keyboardType="default"
              required
              placeholder="كلمة المرور"
              secureText
            />
            <View style={{marginBottom: RPW(6)}} />
            <AuthInput
              keyboardType="default"
              required
              placeholder="تأكيد كلمة المرور"
              secureText
            />
            <View style={{marginBottom: RPW(6)}} />
            <CustomBtn
              backgroundColor={COLORS.main}
              title="انشاء الحساب"
              onPress={() => {
                navigation.replace('UserDrawer', {
                  screen: 'AllModules',
                });
              }}
              titleColor={COLORS.white}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
