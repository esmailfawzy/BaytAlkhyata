import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RPH} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

const CourseOverviewCard = () => {
  return (
    <View
      style={[
        {
          width: '100%',
          height: RPH(15),
          borderRadius: 10,
          borderEndWidth: 5,
          borderEndColor: '#FAB65E',
          padding: 8,
          alignItems: 'center',
        },
        Platform.OS == 'ios' ? {...iosShadow} : {elevation: 4},
      ]}>
      <Text>CourseOverviewCard{RPH(15)}</Text>
    </View>
  );
};

export default CourseOverviewCard;

const styles = StyleSheet.create({});
