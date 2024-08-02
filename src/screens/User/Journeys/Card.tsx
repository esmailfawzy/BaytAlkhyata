import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RPH, RPW} from '../../../utils/ScreenSize';
import {FONTS} from '../../../constants/Fonts';
import {DymmyImgs} from '../../../assets/imgs/AllModules';
import {COLORS} from '../../../constants/Colors';
import {CONSTANTS} from '../../../constants/Constants';
import {useNavigation} from '@react-navigation/native';

interface KnownTypes {
  item: any;
  id: number;
}

const Card = ({item, id}: KnownTypes) => {
  const navigation = useNavigation();
  return (
    <View
      key={item._id}
      style={{
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
      }}>
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
          onPress={() => {}}
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
