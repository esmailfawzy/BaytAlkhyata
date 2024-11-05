import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RPW} from '../../../../utils/ScreenSize';
import BankQuizIcon from '../../../../assets/icons/BankQuizIcon';
import {FONTS} from '../../../../constants/Fonts';
import LessonArrow from '../../../../assets/icons/Lesson/LessonArrow';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {observer} from 'mobx-react';

type KnownTypes = {
  onPress: () => void;
};

const QuizBankCard = observer(({onPress}: KnownTypes) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ChevronRight />
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 12,
        }}>
        <Text style={styles.title}>بنك الاسئلة</Text>
        <Text style={styles.subTitle}>احصل علي نقاط أعلي من بنك الاسئلة !</Text>
      </View>
      <BankQuizIcon />
    </Pressable>
  );
});

export default QuizBankCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#298D4533',
    paddingVertical: 9,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderEndWidth: 5,
    borderEndColor: '#298D45',
  },

  title: {
    fontFamily: FONTS.Manuale,
    fontSize: 15,
    fontWeight: '600',
    color: '#298D45',
  },
  subTitle: {
    fontFamily: FONTS.Manuale,
    fontSize: 12,
    fontWeight: '600',
    color: '#656B66',
  },
});
