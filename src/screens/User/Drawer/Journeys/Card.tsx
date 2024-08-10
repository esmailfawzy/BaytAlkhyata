import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {SheetManager} from 'react-native-actions-sheet';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CONSTANTS} from '../../../../constants/Constants';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import {IMGS} from '../../../../assets';
import {FONTS} from '../../../../constants/Fonts';
import SaveIcon from '../../../../assets/icons/SaveIcon';

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
  JourneyHome: any;
};

const Card = ({item, id}: KnownTypes) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // const navigation = useNavigation();
  return (
    <TouchableOpacity
      disabled={!item.isActive}
      activeOpacity={CONSTANTS.activeOpacity}
      onPress={() => {
        item.owned
          ? navigation.navigate('JourneyHome')
          : SheetManager.show('course-overview');
      }}
      key={item._id}
      style={[
        {
          borderRadius: 10,
          width: '100%',
          height: RPH(22),
          backgroundColor: item.isActive ? COLORS.white : '#79797933',
          opacity: item.isActive ? 1 : 0.6,
          marginBottom: RPH(3),
          borderBottomWidth: 3,
          borderEndWidth: 3,
          padding: RPW(4),
          borderColor: '#FAB65E',
          // flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
        },
        Platform.OS == 'ios' ? {...iosShadow} : {elevation: 4},
      ]}>
      <View
        style={{
          width: '100%',
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: RPW(3),
            width: '100%',
          }}>
          <Text
            style={{
              textAlign: 'left',
              fontFamily: FONTS.Manuale,
              fontSize: 20,
              fontWeight: '700',
              color: '#FAB65E',
            }}>
            {item.title}
          </Text>
          {item.isActive && <SaveIcon />}
        </View>
        <Text
          style={{
            textAlign: 'left',
            fontFamily: FONTS.Manuale,
            marginBottom: RPW(9),
            color: '#707070',
            width: '70%',
          }}>
          {item.description}
        </Text>
      </View>
      {!item.isActive && (
        <Image
          source={IMGS.JourneyLock}
          resizeMode="contain"
          style={{
            width: '38%',
            height: '70%',
            position: 'absolute',
            end: RPW(8),
            top: RPW(2),
            zIndex: -1,
            opacity: 0.5,
          }}
        />
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <TouchableOpacity
          disabled={!item.isActive}
          activeOpacity={CONSTANTS.activeOpacity}
          onPress={() => {
            item.owned
              ? navigation.navigate('JourneyHome')
              : SheetManager.show('course-overview');
          }}
          style={{
            height: 37,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAB65E',
            padding: 10,
            borderRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: COLORS.white,
            }}>
            {item.owned ? 'تكملة رحلة التعلم' : 'معرفة المزيد عن الدبلومة'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!item.isActive}
          activeOpacity={CONSTANTS.activeOpacity}
          onPress={() => {}}
          style={{
            height: 37,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            padding: 10,
            borderRadius: 8,
            borderWidth: item.owned ? 0 : 1,
            borderColor: '#FAB65E',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#FAB65E',
            }}>
            {item.owned ? '50%' : 'شراء'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
