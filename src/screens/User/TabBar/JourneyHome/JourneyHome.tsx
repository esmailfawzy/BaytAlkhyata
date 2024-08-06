import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import {useNavigation} from '@react-navigation/native';

const JourneyHome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          flex: 1,
          padding: RPW(8),
          alignItems: 'center',
        }}></View>
    </SafeAreaView>
  );
};

export default JourneyHome;

const styles = StyleSheet.create({});
