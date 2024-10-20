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
import {COLORS} from '../../../../constants/Colors';
import {RPW} from '../../../../utils/ScreenSize';
import StarIcon from '../../../../assets/icons/StarIcon';
import {FONTS} from '../../../../constants/Fonts';
import {CustomBtn} from '../../../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import FirstItem from '../../../../assets/imgs/GiftImgs/FirstItem';
import {CONSTANTS} from '../../../../constants/Constants';
import PDFIcon from '../../../../assets/icons/PDFIcon';
import DownIcon from '../../../../assets/icons/DownIcon';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

const ItemCard = () => {
  return (
    <View
      style={{
        width: '45%',
        gap: 6,
        alignItems: 'center',
      }}>
      <View
        style={[
          {
            width: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
            gap: 6,
            paddingTop: RPW(3),
            borderRadius: 10,
          },
          Platform.OS == 'ios' ? {...iosShadow} : {elevation: 4},
        ]}>
        <PDFIcon />
        <Text
          style={{
            color: COLORS.main,
            fontFamily: FONTS.Manuale,
            fontSize: 16,
            fontWeight: '600',
          }}>
          كتاب الخياطة
        </Text>
        <Text
          style={{
            color: '#BABABA',
            fontFamily: FONTS.Manuale,
            fontSize: 12,
            fontWeight: '600',
          }}>
          12 mb
        </Text>
        <TouchableOpacity
          activeOpacity={CONSTANTS.activeOpacity}
          style={{
            width: '100%',
            backgroundColor: COLORS.main,
            padding: RPW(2),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderBottomStartRadius: 10,
            borderBottomEndRadius: 10,
            gap: 6,
          }}>
          <DownIcon />
          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 16,
              fontWeight: '600',
              color: COLORS.white,
            }}>
            تبديل النقاط
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Library = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: RPW(8),
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 20,
              color: '#333333',
              // alignSelf: 'flex-start',
              marginBottom: RPW(10),
              // marginTop: RPW(16),
            }}>
            المكتبة
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: RPW(8),
            }}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({});
