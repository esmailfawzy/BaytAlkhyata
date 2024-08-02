import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/Colors';
import {RPH, RPW} from '../../../utils/ScreenSize';
import {DymmyImgs} from '../../../assets/imgs/AllModules';
import DummyData from '../../../dummy_data/AllModules.json';
import {FONTS} from '../../../constants/Fonts';
import Card from './Card';

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
