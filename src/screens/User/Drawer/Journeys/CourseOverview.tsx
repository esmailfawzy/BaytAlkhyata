import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import ActionSheet, {Route, useSheetRef} from 'react-native-actions-sheet';
import OverView from './OverView';
import Payments from './Payments';

const routes: Route[] = [
  {
    name: 'route-a',
    component: OverView,
  },
  {
    name: 'route-b',
    component: Payments,
  },
];

const CourseOverview = (): React.JSX.Element => {
  return (
    <ActionSheet
      closeOnPressBack
      defaultOverlayOpacity={0.5}
      // springOffset={50}
      animated
      containerStyle={{
        maxHeight: '85%',
        height: '85%',
      }}
      enableRouterBackNavigation={true}
      routes={routes}
      isModal={false}
      initialRoute="route-a"
    />
  );
};

export default CourseOverview;

const styles = StyleSheet.create({});
