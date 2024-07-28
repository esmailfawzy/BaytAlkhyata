import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RPH, RPW} from '../utils/ScreenSize';
import {FONTS} from '../constants/Fonts';
import {COLORS} from '../constants/Colors';
import {CONSTANTS} from '../constants/Constants';

interface props {
  backgroundColor: string;
  title: string;
  onPress?: () => void;
  titleColor?: string;
  borderWidth?: number;
}

const CustomBtn = (props: props): React.JSX.Element => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={CONSTANTS.activeOpacity}
      style={{
        width: '100%',
        padding: RPW(3),
        height: Platform.OS == 'android' ? 55 : 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.backgroundColor,
        borderRadius: 100,
        borderWidth: props.borderWidth || 0,
        borderColor: props.borderWidth == 1 ? COLORS.main : '#00000000',
      }}>
      <Text
        style={{
          fontFamily: FONTS.Manuale,
          fontSize: 15,
          fontWeight: Platform.OS == 'android' ? 'bold' : '400',
          color: props.titleColor || COLORS.white,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});
