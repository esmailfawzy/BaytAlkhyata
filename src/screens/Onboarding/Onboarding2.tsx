import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {IMGS} from '../../assets';
import {RPH, RPW} from '../../utils/ScreenSize';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/Colors';
import {CustomBtn} from '../../components';
import {useNavigation} from '@react-navigation/native';
import LogoSvg from '../../assets/imgs/Logo';
import {FONTS} from '../../constants/Fonts';

function Onboarding2(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View
        style={{
          flex: 1,
          marginVertical: RPW(5),
          alignItems: 'center',
        }}>
        <LogoSvg height={RPH(13)} width={RPW(24)} />
        <Image
          source={IMGS.Onboarding2}
          resizeMode="contain"
          style={{
            width: RPW(90),
            height: RPH(55),
            zIndex: -1,
          }}
        />
        <LinearGradient
          style={{
            height: Platform.OS == 'android' ? RPH(70) : RPH(65),
            width: RPW(100),
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: 0,
            zIndex: 1,
            paddingHorizontal: RPW(7),
          }}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={[COLORS.white, COLORS.white, 'rgba(255,255,255,0)']}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: RPH(2),
              // backgroundColor: COLORS.white,
            }}>
            <Text
              style={{
                fontFamily: FONTS.Manuale,
                color: COLORS.main,
                fontWeight: Platform.OS == 'android' ? 'bold' : '600',
                fontSize: 30,
                textAlign: 'center',
                marginBottom: RPW(4),
              }}>
              التحق بنا
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: Platform.OS == 'android' ? 'bold' : '400',
                textAlign: 'center',
                color: '#B4B4B4',
                marginBottom: RPW(25),
              }}>
              انضم إلينا لتكتسب المهارات والمعرفة اللازمة لتحترف فن الخياطة
              بخطوات مدروسة ودروس مقدمة من خبراء الصناعة. انطلق في رحلتك لتصبح
              خياطًا محترفًا معنا.
            </Text>
            <View
              style={{
                width: RPW(90),
              }}>
              <CustomBtn
                title="تسجيل الدخول"
                backgroundColor={COLORS.customGray}
                titleColor={COLORS.black}
                onPress={() => {
                  navigation.navigate('AuthStack', {
                    screen: 'Login',
                  });
                }}
              />
            </View>
            <View
              style={{
                marginVertical: RPH(1),
              }}
            />
            <View
              style={{
                width: RPW(90),
              }}>
              <CustomBtn
                title="انشاء حساب جديد"
                backgroundColor={COLORS.main}
                titleColor={COLORS.white}
                onPress={() => {
                  navigation.navigate('AuthStack', {
                    screen: 'Signup',
                  });
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

export default Onboarding2;

const styles = StyleSheet.create({});
