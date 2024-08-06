import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Card from './Card';
import DummyData from '../../../../dummy_data/AllModules.json';
import {COLORS} from '../../../../constants/Colors';
import {RPW} from '../../../../utils/ScreenSize';

const AllModules = () => {
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
            <Card key={id} id={id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllModules;

const styles = StyleSheet.create({});
