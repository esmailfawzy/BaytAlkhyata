import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RPW} from '../../../../utils/ScreenSize';
import LogoSvg from '../../../../assets/imgs/Logo';
import {FONTS} from '../../../../constants/Fonts';

interface KnownTypes {
  item: any;
  index: number;
}

const NotificationCard = ({item, index}: KnownTypes) => {
  return (
    <View
      style={{
        backgroundColor: '#FAFAFA',
        width: '100%',
        alignSelf: 'center',
        padding: RPW(3),
        marginBottom: RPW(4),
        borderRadius: 10,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          style={{
            padding: 9,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: '#ECECEC',
            width: 50,
            height: 50,
          }}>
          <LogoSvg height={31} width={27} />
        </View>
        <Text
          style={{
            fontSize: 10,
            color: '#797979',
            textAlign: 'left',
            fontFamily: FONTS.Manuale,
            width: '80%',
          }}>
          {item.title}
        </Text>
      </View>

      <Text
        style={{
          color: '#232323',
          fontFamily: FONTS.Manuale,
          fontSize: 10,
          fontWeight: '500',
          textAlign: 'right',
        }}>
        {item.date != 'من أسبوع' ? item.time : ''}
      </Text>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({});
