import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {FONTS} from '../../../../constants/Fonts';
import {CONSTANTS} from '../../../../constants/Constants';
import {COLORS} from '../../../../constants/Colors';
import {DymmyImgs} from '../../../../assets/imgs/AllModules';

interface KnownTypes {
  item: any;
  id: number;
}

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

type RootStackParamList = {
  LibraryStack: {screen: string} | undefined;
};
const Card = ({item, id}: KnownTypes) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View
      key={item._id}
      style={[
        {
          borderRadius: 10,
          width: '100%',
          height: RPH(22),
          backgroundColor: item.color,
          marginBottom: RPH(3),
          borderBottomWidth: 3,
          borderEndWidth: 3,
          padding: RPW(4),
          borderColor: item.borderColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        Platform.OS == 'ios' ? {...iosShadow} : {elevation: 0},
      ]}>
      <View
        style={{
          width: '50%',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            textAlign: 'left',
            fontFamily: FONTS.Manuale,
            fontSize: 20,
            marginBottom: RPW(3),
            fontWeight: '700',
            color: item.borderColor,
          }}>
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: 'left',
            fontFamily: FONTS.Manuale,
            marginBottom: RPW(9),
            color: '#707070',
          }}>
          {item.description}
        </Text>

        <TouchableOpacity
          activeOpacity={CONSTANTS.activeOpacity}
          onPress={() => {
            navigation.navigate('LibraryStack', {
              screen: 'Journeys',
            });
          }}
          style={{
            // width: RPW(19),
            height: 37,
            // height: RPW(11),
            // width: 75,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: item.borderColor,
            padding: 10,
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              // fontFamily: FONTS.Manuale,
              color: COLORS.white,
            }}>
            ابدأ رحلتك !ِ
          </Text>
        </TouchableOpacity>
      </View>

      <DymmyImgs.RehletElta3lom />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
