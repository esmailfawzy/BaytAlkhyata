import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import CustomTrackPlayer from '../../../../components/CustomTrackPlayer';

interface KnownTypes {
  currentStep: number;
}

const LessonView = ({currentStep}: KnownTypes) => {
  return (
    <View style={[styles.container]}>
      <CustomTrackPlayer />
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
    backgroundColor: COLORS.white,
  },
});
