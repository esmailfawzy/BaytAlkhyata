import {
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
import {RPH, RPW} from '../../utils/ScreenSize';
import ChevronRight from '../../assets/icons/ChevronRight';
import {useNavigation} from '@react-navigation/native';
import LogoSvg from '../../assets/imgs/Logo';
import {CONSTANTS} from '../../constants/Constants';
import {FONTS} from '../../constants/Fonts';
import {AuthInput, CustomBtn} from '../../components';
import Ellipse from '../../assets/icons/Ellipse';
const OTP = () => {
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
          <Ellipse />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: Platform.OS == 'android' ? RPH(5) : RPH(3),
              marginBottom: RPH(8),
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
              color: COLORS.main,
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
              marginBottom: RPH(5.5),
            }}>
            قم بادخال الرمز المرسل اليك
          </Text>

          <AuthInput
            placeholder="رقم الهاتف"
            keyboardType="phone-pad"
            secureText={false}
            required={false}
            borderRadius={8}
          />
          <View
            style={{
              marginBottom: RPH(6),
            }}
          />
          <CustomBtn
            backgroundColor={COLORS.main}
            title="ادخال"
            borderRadius={8}
            onPress={() => {}}
            titleColor={COLORS.white}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTP;

const styles = StyleSheet.create({});
