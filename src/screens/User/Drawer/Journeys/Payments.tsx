import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSheetRouteParams, useSheetRouter} from 'react-native-actions-sheet';
import Wallet from '../../../../assets/icons/PaymentIcons/Wallet';
import Visa from '../../../../assets/icons/PaymentIcons/Visa';
import Paypal from '../../../../assets/icons/PaymentIcons/Paypal';
import {RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import {FONTS} from '../../../../constants/Fonts';
import {CONSTANTS} from '../../../../constants/Constants';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import Whatsapp from '../../../../assets/icons/PaymentIcons/Whatsapp';

const Btns: [
  {
    title: string;
    icon: React.JSX.Element;
    // onPress: () => void;
  },
] = [
  {
    title: 'محفظة الكترونية',
    icon: <Wallet />,
  },
  {
    title: 'Visa',
    icon: <Visa />,
  },
  {
    title: 'Paypal',
    icon: <Paypal />,
  },
];

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

const Payments = () => {
  const router = useSheetRouter('sheet-router');
  const params = useSheetRouteParams('sheet-router', 'route-b');
  console.log('route-b', 'params', params);

  return (
    <View
      style={{
        padding: RPW(8),
        width: '100%',
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: RPW(13),
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: FONTS.Manuale,
            fontWeight: 'bold',
            color: COLORS.main,
          }}>
          اختار طريقة الدفع
        </Text>
        <TouchableOpacity
          activeOpacity={CONSTANTS.activeOpacity}
          onPress={() => {
            router?.goBack(undefined, 10);
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.black,
            }}>
            X
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          gap: RPW(8),
          marginBottom: RPW(20),
        }}>
        {Btns.map((item, id) => (
          <TouchableOpacity
            activeOpacity={CONSTANTS.activeOpacity}
            key={id}
            style={[
              {
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                padding: RPW(4),
                borderRadius: 10,
              },
              Platform.OS == 'ios' ? {...iosShadow} : {elevation: 4},
            ]}>
            <ChevronRight />
            <Text
              style={{
                // marginEnd: RPW(2),
                fontFamily: FONTS.Manuale,
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.black,
                textAlign: 'right',
              }}>
              {item.title}
            </Text>
            {item.icon}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        activeOpacity={CONSTANTS.activeOpacity}
        style={{
          backgroundColor: '#FAB65E',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: RPW(3),
          borderRadius: 10,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Whatsapp />
        <Text
          style={{
            fontFamily: FONTS.Manuale,
            color: COLORS.white,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          تواصل واتساب
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({});
