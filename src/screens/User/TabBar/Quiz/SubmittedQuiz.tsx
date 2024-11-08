import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {FONTS} from '../../../../constants/Fonts';
import ProgressBar from '../../../../components/ProgressBar';
import {CustomBtn} from '../../../../components';
import QuizImage from '../../../../assets/imgs/QuizImage';
import QuizBankCard from './QuizBankCard';
import {observer} from 'mobx-react';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

interface Navigators {
  QuizBank: undefined;
}
const SubmittedQuiz = observer(() => {
  const navigation = useNavigation<NavigationProp<Navigators>>();
  const [selectedOption, setSelectedOption] = useState<string | null>('المقص');
  const options = ['المقص', 'مكنة الخياطة', 'المسطرة'];

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
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
          <Text style={styles.timer}>10/10</Text>

          {/* Progress Bar */}
          <ProgressBar progress={100} />

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: RPW(12),
            }}>
            <QuizImage />
          </View>

          {/* Question */}
          <Text style={styles.question}>ما هي الأداة المستخدمة في القص ؟</Text>
          <View style={{marginVertical: 13}}>
            {/* Options */}
            {options.map((option, index) => (
              <TouchableOpacity
                disabled
                key={index}
                style={[
                  styles.option,
                  selectedOption === option && styles.selectedOption,
                  Platform.OS == 'ios' && {...iosShadow},
                ]}
                onPress={() => setSelectedOption(option)}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <QuizBankCard
            onPress={() => {
              navigation.navigate('QuizBank');
            }}
          />

          {/* Navigation Buttons */}
          <View
            style={{
              width: '95%',
              marginTop: 20,
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <CustomBtn
              width={'45%'}
              backgroundColor={COLORS.main}
              borderRadius={100}
              borderWidth={1}
              title="التالي"
              titleColor={COLORS.white}
              onPress={() => {}}
            />
            <CustomBtn
              width={'45%'}
              backgroundColor={'#E2E2E2'}
              borderRadius={100}
              title="السابق"
              titleColor={'#6D6D6D'}
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

export default SubmittedQuiz;

const styles = StyleSheet.create({
  container: {
    padding: RPH(3),
    // marginBottom: RPH(8),
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.white,
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
    textAlign: 'left',
    fontWeight: '500',
    fontFamily: FONTS.Manuale,
    color: COLORS.black,
  },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: RPW(3),
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: '#298D45',
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
