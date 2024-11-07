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
import SignupStore from './Stores/SignupStore';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

type Navigators = {
  Login: {screen: string} | undefined;
};
const ChangePass = observer(() => {
  const navigation = useNavigation<NavigationProp<Navigators>>();

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
            قم بادخال كلمة المرور الجديدة
          </Text>

          <View style={styles.container}>
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
          </View>

          <View
            style={{
              marginBottom: RPH(6),
            }}
          />
          <CustomBtn
            backgroundColor={COLORS.main}
            title="تغيير"
            borderRadius={8}
            onPress={async () => {
              if (SignupStore.password == SignupStore.re_password) {
                if (
                  await ForgetPasswordStore.changePass(SignupStore.password)
                ) {
                  navigation.navigate('Login');
                }
              } else {
                Alert.alert('خطأ', 'كلمتين المرور غير متطابقتين');
              }
            }}
            titleColor={COLORS.white}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default ChangePass;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    writingDirection: 'ltr',
    width: '100%',
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
