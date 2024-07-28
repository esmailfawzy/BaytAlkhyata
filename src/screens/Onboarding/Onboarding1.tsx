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

function Onboarding1(): React.JSX.Element {
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
          source={IMGS.Onboarding1}
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
              أهلا بك !
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Manuale,
                fontSize: 15,
                fontWeight: Platform.OS == 'android' ? 'bold' : '400',
                textAlign: 'center',
                color: '#B4B4B4',
                marginBottom: RPW(25),
              }}>
              مرحباً بكم في تطبيقنا لتعليم الخياطة، حيث نمنحك المهارات والمعرفة
              التي تحتاجها لتحترف فن الخياطة بأسلوب{' '}
              <Text
                style={{
                  fontWeight: '600',
                  color: COLORS.main,
                }}>
                مؤسسي محترف
              </Text>
              . استعد للانطلاق في رحلتك لتعلم وإتقان الخياطة مع أفضل الأدوات
              والدروس المقدمة من{' '}
              <Text
                style={{
                  fontWeight: Platform.OS == 'android' ? 'bold' : '600',
                  color: COLORS.main,
                }}>
                خبراء
              </Text>{' '}
              الصناعة.
            </Text>
            <View
              style={{
                width: RPW(90),
              }}>
              <CustomBtn
                title="التالي"
                backgroundColor={COLORS.main}
                titleColor={COLORS.white}
                onPress={() => {
                  navigation.navigate('Onboarding2');
                }}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

export default Onboarding1;

const styles = StyleSheet.create({});
