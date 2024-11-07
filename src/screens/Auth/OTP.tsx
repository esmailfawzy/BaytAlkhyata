import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../constants/Colors';
import {RPH, RPW} from '../../utils/ScreenSize';
import ChevronRight from '../../assets/icons/ChevronRight';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import LogoSvg from '../../assets/imgs/Logo';
import {CONSTANTS} from '../../constants/Constants';
import {FONTS} from '../../constants/Fonts';
import {AuthInput, CustomBtn} from '../../components';
import Ellipse from '../../assets/icons/Ellipse';
import {observer} from 'mobx-react';
import ForgetPasswordStore from './Stores/ForgetPasswordStore';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

type Navigators = {
  ChangePass: {screen: string} | undefined;
};

const OTP = observer(() => {
  const navigation = useNavigation<NavigationProp<Navigators>>();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '']);
  const [timerMin, setTimerMin] = useState<number>(40);
  const [resend, setResend] = useState<boolean>(false);
  const inputs: any[] = [];

  useEffect(() => {
    inputs[0].focus();
  }, []);

  useEffect(() => {
    const timeOutTimer = setTimeout(() => {
      if (timerMin > 0) {
        setTimerMin(timerMin - 1);
      } else {
        setResend(true);
      }
    }, 1000);

    return () => clearTimeout(timeOutTimer);
  }, [timerMin]);

  useEffect(() => {
    ForgetPasswordStore.setOTPCode(otp.join(''));
  }, [otp]);

  const handleOtpChange = (value: number | string, index: number) => {
    const newOtp: any[] = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
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

          <View style={styles.container}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={[
                  styles.box,
                  Platform.OS == 'ios' ? {...iosShadow} : {elevation: 4},
                ]}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={value => handleOtpChange(value, index)}
                value={digit}
                ref={input => {
                  inputs[index] = input;
                }}
              />
            ))}
          </View>
          <View
            style={{
              marginTop: 5,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <Pressable
              onPress={() => {
                ForgetPasswordStore.sendPhoneNumber();
                console.log('sent');
                setTimerMin(60);
                setResend(false);
              }}
              disabled={!resend}>
              <Text
                style={{
                  fontFamily: FONTS.Manuale,
                  fontSize: 10,
                  fontWeight: '500',
                  color: resend ? COLORS.main : '#777777',
                  textDecorationLine: 'underline',
                }}>
                اعادة الارسال
              </Text>
            </Pressable>
            <Text
              style={{
                fontFamily: FONTS.Manuale,
                fontSize: 10,
                fontWeight: '500',
                color: COLORS.main,
              }}>
              00:{timerMin < 10 ? `0${timerMin}` : timerMin}
            </Text>
          </View>
          <View
            style={{
              marginBottom: RPH(6),
            }}
          />
          <CustomBtn
            backgroundColor={COLORS.main}
            title="ادخال"
            borderRadius={8}
            onPress={async () => {
              console.log(ForgetPasswordStore.otpCode);
              if (await ForgetPasswordStore.verifyOTP()) {
                navigation.navigate('ChangePass');
              } else {
                Alert.alert('خطأ', 'تأكد من الرمز المرسل اليك');
              }
            }}
            titleColor={COLORS.white}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default OTP;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    writingDirection: 'ltr',
    width: '90%',
  },
  box: {
    borderWidth: 1,
    borderColor: COLORS.main,
    borderRadius: 8,
    width: 50,
    height: 50,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: FONTS.Manuale,
    fontWeight: Platform.OS == 'android' ? 'bold' : '600',
  },
});
