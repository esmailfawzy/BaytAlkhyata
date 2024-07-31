import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RPH, RPW} from '../../utils/ScreenSize';
import {FONTS} from '../../constants/Fonts';
import {CONSTANTS} from '../../constants/Constants';
import {COLORS} from '../../constants/Colors';

interface KnownProps {
  title: string;
  color: string;
  icon: React.JSX.Element;
  onPress: () => void;
}

const DrawerBtn = ({title, icon, color, onPress}: KnownProps) => {
  return (
    <TouchableOpacity
      activeOpacity={CONSTANTS.activeOpacity}
      onPress={onPress}
      style={{
        width: '100%',
        padding: RPW(2),
        marginBottom: RPH(3),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: color,
        borderRadius: 10,
      }}>
      {icon}
      <Text
        style={{
          color: '#605D5D',
          fontSize: 14,
          fontFamily: FONTS.Manuale,
          fontWeight: '500',
          marginStart: 10,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerBtn;

const styles = StyleSheet.create({});
