import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/Colors';
import {RPW} from '../../../../utils/ScreenSize';
import Card from './Card';
import DummyData from '../../../../dummy_data/QuizBank.json';
import {observer} from 'mobx-react';

const QuizBank = observer(() => {
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
          {DummyData.map((item, id) => (
            <Card key={id} item={item} id={id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default QuizBank;

const styles = StyleSheet.create({});
