import React, {act, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import LessonArrow from '../../../../assets/icons/Lesson/LessonArrow';
import LessonQuiz from '../../../../assets/icons/Lesson/LessonQuiz';
import {CustomBtn} from '../../../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import ChapterStore, {ChapterType} from '../JourneyHome/Stores/ChapterStore';
import LevelStore, {LevelType} from './Stores/LevelStore';
import RenderSections from './RenderSections';

type Navigators = {
  QuizView: undefined;
};

const Lesson = observer(() => {
  const navigation = useNavigation<NavigationProp<Navigators>>();
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    LevelStore.getLevels();
  }, [ChapterStore.currentChapter]);

  const renderStep = (item: LevelType, step: number) => {
    const isActive = LevelStore.levelIndex >= step;

    return (
      <View key={step} style={styles.stepWrapper}>
        <TouchableOpacity
          onPress={() => {
            console.log(item);
            LevelStore.setCurrentLevel(item);
            LevelStore.setLevelIndex(step);
          }}
          style={styles.circleWrapper}>
          <View
            style={[
              styles.circle,
              isActive && styles.activeCircle,
              LevelStore.levelIndex == step && {
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
          {LevelStore.levelIndex == step ? (
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
      </View>
    );
  };

  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: COLORS.white}]}>
      <View style={styles.container}>
        <ScrollView
          horizontal
          style={{
            paddingVertical: Platform.OS == 'ios' ? 17 : 0,
          }}>
          <View style={styles.stepContainer}>
            {LevelStore.levels.map((level, index) =>
              renderStep(level, index + 1),
            )}
          </View>
        </ScrollView>
        <ScrollView>
          <RenderSections currentStep={LevelStore.levelIndex} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
});

export default Lesson;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    backgroundColor: COLORS.white,
    flex: 1,
  },
  stepContainer: {
    flexDirection: Platform.OS == 'android' ? 'row-reverse' : 'row',
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'space-around',
    // width: RPW(100),
    gap: RPW(5),
    marginVertical: Platform.OS == 'android' ? RPW(5) : 0,
    height: RPH(3),
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
    borderWidth: 1,
    borderColor: '#FF7800',
  },
  activeCircle: {
    backgroundColor: '#298D45',
    borderWidth: 0,
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
