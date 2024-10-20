import React, {act, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import {RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import LessonArrow from '../../../../assets/icons/Lesson/LessonArrow';
import LessonQuiz from '../../../../assets/icons/Lesson/LessonQuiz';
import LessonView from './LessonView';
import {CustomBtn} from '../../../../components';
import {useNavigation} from '@react-navigation/native';

const Lesson = () => {
  const navigation = useNavigation();
  const [activeStep, setActiveStep] = useState(1);

  const renderStep = (step: number) => {
    const isActive = activeStep >= step;

    if (step !== 5) {
      return (
        <View key={step} style={styles.stepWrapper}>
          {/* <View
            style={[
              styles.line,
              isActive && styles.activeLine,
              activeStep == step && {
                backgroundColor: COLORS.main,
              },
            ]}
          /> */}
          <TouchableOpacity
            onPress={() => setActiveStep(step)}
            style={styles.circleWrapper}>
            <View
              style={[
                styles.circle,
                isActive && styles.activeCircle,
                activeStep == step && {
                  width: RPW(10),
                  height: RPW(10),
                  backgroundColor: COLORS.main,
                  borderRadius: RPW(10),
                },
              ]}>
              <Text style={[styles.label, isActive && styles.activeLabel]}>
                {step}
              </Text>
            </View>
            {activeStep == step ? (
              <View
                style={{
                  position: 'absolute',
                  bottom: -RPW(3),
                  alignSelf: 'center',
                }}>
                <LessonArrow />
              </View>
            ) : (
              <></>
            )}
          </TouchableOpacity>
          {/* <View
            style={[
              styles.line,
              isActive && styles.activeLine,
              activeStep == step && {
                backgroundColor: COLORS.main,
              },
            ]}
          /> */}
        </View>
      );
    } else if (step == 5) {
      return (
        <View key={step} style={styles.stepWrapper}>
          {/* <View
            style={[
              styles.line,
              isActive && styles.activeLine,
              activeStep == step && {
                backgroundColor: COLORS.main,
              },
            ]}
          /> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('QuizView');
              // setActiveStep(step);
            }}
            style={styles.circleWrapper}>
            <View
              style={[
                styles.circle,
                isActive && styles.activeCircle,
                activeStep == step && {
                  width: RPW(10),
                  height: RPW(10),
                  borderRadius: RPW(10),
                },
                {
                  borderWidth: 1,
                  borderColor: '#FF7800',
                  backgroundColor: 'transparent',
                },
              ]}>
              <LessonQuiz />
            </View>
            {activeStep == step ? (
              <View
                style={{
                  position: 'absolute',
                  bottom: -RPW(4),
                  alignSelf: 'center',
                }}>
                <LessonArrow />
              </View>
            ) : (
              <></>
            )}
          </TouchableOpacity>
          {/* <View
            style={[
              styles.line,
              isActive && styles.activeLine,
              activeStep == step && {
                backgroundColor: COLORS.main,
              },
            ]}
          /> */}
        </View>
      );
    }
  };

  // const renderContent = () => {
  //   switch (activeStep) {
  //     case 1:
  //       return <LessonView currentStep={activeStep} />;
  //     case 2:
  //       return <LessonView currentStep={activeStep} />;
  //     case 3:
  //       return <LessonView currentStep={activeStep} />;
  //     case 4:
  //       return <LessonView currentStep={activeStep} />;
  //     case 5:
  //       return <LessonView currentStep={activeStep} />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: COLORS.white}]}>
      <View style={styles.container}>
        <ScrollView
          horizontal
          style={{
            paddingVertical: Platform.OS == 'ios' ? 17 : 0,
          }}>
          <View style={styles.stepContainer}>
            {renderStep(1)}
            {renderStep(2)}
            {renderStep(3)}
            {renderStep(4)}
            {renderStep(5)}
          </View>
        </ScrollView>
        <ScrollView>
          <LessonView currentStep={activeStep} setActiveStep={setActiveStep} />
        </ScrollView>
        {activeStep < 5 ? (
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
              onPress={() => {
                if (activeStep < 4) {
                  setActiveStep(activeStep + 1);
                } else if (activeStep == 4) {
                  console.log(activeStep);
                  navigation.navigate('QuizView');
                }
              }}
            />
            <CustomBtn
              width={'45%'}
              backgroundColor={'#E2E2E2'}
              borderRadius={100}
              title="السابق"
              titleColor={activeStep == 1 ? '#6D6D6D' : COLORS.black}
              disabled={activeStep == 1}
              onPress={() => {
                if (activeStep > 1) setActiveStep(activeStep - 1);
              }}
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    backgroundColor: COLORS.white,
    flex: 1,
  },
  stepContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'space-around',
    // width: RPW(100),
    gap: RPW(5),
    marginVertical: Platform.OS == 'android' ? RPW(5) : 0,
  },
  stepWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleWrapper: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: RPW(9),
    height: RPW(9),
    borderRadius: 20,
    backgroundColor: '#FAB65E7D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: '#298D45',
  },
  label: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
  activeLabel: {
    color: 'white',
  },
  line: {
    width: RPW(5.5),
    height: 2,
    backgroundColor: '#FAB65E7D',
    zIndex: 0,
  },
  activeLine: {
    backgroundColor: '#298D45',
  },
  contentContainer: {
    alignItems: 'center',
  },
  card: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});
