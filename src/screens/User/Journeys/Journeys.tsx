import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/Colors';
import {RPW} from '../../../utils/ScreenSize';

const Journeys = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: RPW(8),
            alignItems: 'center',
          }}>
          <Text>hi</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Journeys;

const styles = StyleSheet.create({});
