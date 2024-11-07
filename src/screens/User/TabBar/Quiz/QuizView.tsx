import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {FONTS} from '../../../../constants/Fonts';
import ProgressBar from '../../../../components/ProgressBar';
import {CustomBtn} from '../../../../components';
import QuizImage from '../../../../assets/imgs/QuizImage';
import {observer} from 'mobx-react';
import QuizViewStore, {QuestionType} from './Stores/QuizViewStore';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

interface Navigators {
  SubmittedQuiz: undefined;
}

const QuizView: React.FC = observer(() => {
  const navigation = useNavigation<NavigationProp<Navigators>>();
  const [questionsArr, setQuestionsArr] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  // QuizViewStore.quizArray.length - 1,

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    getArray();
  }, []);

  const getArray = async () => {
    const res = await QuizViewStore.getQuizArray();
    console.log('res from Quiz View', res);
    setQuestionsArr(res);
    setCurrentQuestion(res?.length - 1);
  };

  if (QuizViewStore.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.white,
        }}>
        <ActivityIndicator color={COLORS.main} size={'large'} />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <ChevronRight color="#000" />
              </TouchableOpacity>
              <Text style={styles.title}>امتحان علي الباترون</Text>
            </View>

            <Text style={styles.timer}>05:22</Text>

            {/* Progress Bar */}
            <ProgressBar
              progress={
                (questionsArr.length > 0
                  ? currentQuestion / questionsArr?.length
                  : 1 / 1) * 100
              }
            />
          </View>
          {/* <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: RPW(12),
              }}>
              <QuizImage />
            </View> */}

          {questionsArr.length > 0 ? (
            <View style={{flex: 1}}>
              {/* Question */}
              <Text
                style={[
                  styles.question,
                  {
                    marginVertical: RPW(12),
                  },
                ]}>
                {questionsArr[currentQuestion]?.question}
              </Text>
              {/* Options */}
              {questionsArr[currentQuestion]?.answers.map((item, ind) => (
                <TouchableOpacity
                  key={ind}
                  style={[
                    styles.option,
                    selectedOption == item?._id
                      ? {
                          borderColor: '#FF8000',
                        }
                      : {
                          borderColor: '#ccc',
                        },
                    Platform.OS == 'ios' && {...iosShadow},
                  ]}
                  onPress={() => setSelectedOption(item?._id)}>
                  <Text style={styles.optionText}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
      <View style={{width: '95%', marginBottom: RPW(8), alignSelf: 'center'}}>
        {/* Navigation Buttons */}
        <View
          style={{
            width: '100%',
            marginTop: 20,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: RPW(4),
          }}>
          <CustomBtn
            width={'45%'}
            backgroundColor={COLORS.main}
            borderRadius={100}
            borderWidth={1}
            title="التالي"
            disabled={currentQuestion < questionsArr.length}
            titleColor={COLORS.white}
            onPress={() => {
              if (currentQuestion < questionsArr.length) {
                setCurrentQuestion(currentQuestion + 1);
              }
            }}
          />
          <CustomBtn
            width={'45%'}
            backgroundColor={'#E2E2E2'}
            borderRadius={100}
            title="السابق"
            titleColor={'#6D6D6D'}
            disabled={currentQuestion == 0}
            onPress={() => {
              if (currentQuestion !== 0) {
                setCurrentQuestion(currentQuestion - 1);
              }
            }}
          />
        </View>
        <CustomBtn
          width={'100%'}
          backgroundColor={COLORS.main}
          borderRadius={100}
          title="الانتهاء"
          titleColor={COLORS.white}
          onPress={() => {
            navigation.navigate('SubmittedQuiz');
          }}
        />
      </View>
    </View>
  );
});

export default QuizView;

const styles = StyleSheet.create({
  container: {
    padding: RPH(3),
    // marginBottom: RPH(8),
    // flex: 1,
    width: '100%',
    alignSelf: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: RPW(2),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: RPW(6),
    fontFamily: FONTS.Manuale,
    color: COLORS.black,
  },
  timer: {
    fontSize: 16,
    color: '#FF8000',
    textAlign: 'left',
    marginBottom: RPH(2),
    fontFamily: FONTS.Manuale,
  },
  question: {
    fontSize: 18,
    // marginTop: RPH(8),
    marginBottom: RPH(2),
    textAlign: 'left',
    fontWeight: '500',
    fontFamily: FONTS.Manuale,
    color: COLORS.black,
  },
  option: {
    borderWidth: 1,
    padding: RPW(3),
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: '#FF8000',
  },
  optionText: {
    fontSize: 12,
    textAlign: 'left',
    color: COLORS.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  navButtonNext: {
    backgroundColor: '#FF8000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishButton: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
