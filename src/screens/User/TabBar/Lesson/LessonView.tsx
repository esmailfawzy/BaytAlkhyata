import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';

interface KnownTypes {
  currentStep: number;
}

const LessonView = ({currentStep}: KnownTypes) => {
  return (
    <View style={[styles.container]}>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text>{currentStep} Lesson Text</Text>
      <Text
        style={{
          marginVertical: 40,
          color: COLORS.white,
        }}>
        {currentStep} Final Lesson Text
      </Text>
    </View>
  );
};

export default LessonView;

const styles = StyleSheet.create({
  container: {
    marginVertical: RPH(2),
    // marginBottom: RPH(8),
    width: '100%',
    // alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
});
