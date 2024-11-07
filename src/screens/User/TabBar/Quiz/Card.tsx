import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {FONTS} from '../../../../constants/Fonts';
import {CONSTANTS} from '../../../../constants/Constants';
import {COLORS} from '../../../../constants/Colors';
import {DymmyImgs} from '../../../../assets/imgs/AllModules';
import Beginners from '../../../../assets/imgs/QuizBank/Beginners';
import MediumQuiz from '../../../../assets/imgs/QuizBank/MediumQuiz';
import HardQuiz from '../../../../assets/imgs/QuizBank/HardQuiz';
import {observer} from 'mobx-react';
import QuizViewStore from './Stores/QuizViewStore';

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
  QuizView: {difficulty: string} | undefined;
};
const Card = observer(({item, id}: KnownTypes) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View
      key={item._id}
      style={[
        {
          borderRadius: 10,
          width: '100%',
          minHeight: RPH(22),
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
            QuizViewStore.setDifficulty(item.difficulty);
            console.log(item.difficulty);
            navigation.navigate('QuizView');
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
      {item.title == 'أسئلة للمبتدئين' && <Beginners />}
      {item.title == 'أسئلة متوسطة' && <MediumQuiz />}
      {item.title == 'أسئلة للمحترفين' && <HardQuiz />}
    </View>
  );
});

export default Card;

const styles = StyleSheet.create({});
