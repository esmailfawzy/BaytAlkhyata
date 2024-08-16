import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CONSTANTS} from '../../constants/Constants';
import {COLORS} from '../../constants/Colors';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

interface props {
  // color: string;
  children?: React.JSX.Element | React.JSX.Element[];
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  options: BottomTabNavigationOptions;
}

const TabBarBtn = (props: props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      accessibilityRole="button"
      testID={props.options.tabBarTestID}
      accessibilityLabel={props.options.tabBarAccessibilityLabel}
      accessibilityState={props.isFocused ? {selected: true} : {}}
      style={{
        backgroundColor: props.isFocused ? COLORS.main : 'transparent',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      activeOpacity={CONSTANTS.activeOpacity}>
      {props.children}
    </TouchableOpacity>
  );
};

export default TabBarBtn;

const styles = StyleSheet.create({});
