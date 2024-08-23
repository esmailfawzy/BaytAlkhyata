import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import LessonArrow from '../../../../assets/icons/Lesson/LessonArrow';
import LessonQuiz from '../../../../assets/icons/Lesson/LessonQuiz';
import LessonView from './LessonView';

const Lesson = () => {
  const [activeStep, setActiveStep] = useState(1);

  const renderStep = (step: number) => {
    const isActive = activeStep >= step;

    if (step < 5) {
      return (
        <View key={step} style={styles.stepWrapper}>
          <View
            style={[
              styles.line,
              isActive && styles.activeLine,
              activeStep == step && {
                backgroundColor: COLORS.main,
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => setActiveStep(step)}
            style={styles.circleWrapper}>
            <View
              style={[
                styles.circle,
                isActive && styles.activeCircle,
                activeStep == step && {
                  width: 45,
                  height: 45,
                  backgroundColor: COLORS.main,
                  borderRadius: 45,
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
          <View
            style={[
              styles.line,
              isActive && styles.activeLine,
              activeStep == step && {
                backgroundColor: COLORS.main,
              },
            ]}
          />
        </View>
      );
    } else if (step == 5) {
      return (
        <View key={step} style={styles.stepWrapper}>
          <View
            style={[
              styles.line,
              isActive && styles.activeLine,
              activeStep == step && {
                backgroundColor: COLORS.main,
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => setActiveStep(step)}
            style={styles.circleWrapper}>
            <View
              style={[
                styles.circle,
                isActive && styles.activeCircle,
                activeStep == step && {
                  width: 45,
                  height: 45,
                  borderRadius: 45,
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
          <View
            style={[
              styles.line,
              isActive && styles.activeLine,
              activeStep == step && {
                backgroundColor: COLORS.main,
              },
            ]}
          />
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
        <View style={styles.stepContainer}>
          {renderStep(1)}
          {renderStep(2)}
          {renderStep(3)}
          {renderStep(4)}
          {renderStep(5)}
        </View>
        <ScrollView>
          <LessonView currentStep={activeStep} />
        </ScrollView>
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
    marginBottom: 20,
    alignSelf: 'center',
  },
  stepWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleWrapper: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 40,
    height: 40,
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
