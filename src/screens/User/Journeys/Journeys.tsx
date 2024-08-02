import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/Colors';
import {RPW} from '../../../utils/ScreenSize';
import JourneysData from '../../../dummy_data/Journeys.json';
import {useNavigation} from '@react-navigation/native';
import Card from './Card';

const Journeys = (): React.JSX.Element => {
  const navigation = useNavigation();

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
          {JourneysData.map((item, id) => (
            <Card key={id} item={item} id={id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Journeys;

const styles = StyleSheet.create({});
