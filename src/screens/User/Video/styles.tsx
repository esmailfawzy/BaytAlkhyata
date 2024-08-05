import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import {RPH, RPW} from '../../../utils/ScreenSize';
import {COLORS} from '../../../constants/Colors';

export default styles = StyleSheet.create({
  container: {
    width: '100%',
    height: RPW(48),
    alignSelf: 'center',
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    marginBottom: RPW(2),
  },
  controlButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: RPW(8),
    height: RPW(8),
    borderRadius: RPW(8) / 2,
  },
  controls: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: -RPW(4),
    width: '100%',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  loader: {
    width: '100%',
    height: '100%',
  },
  timeText: {
    fontSize: 14,
    color: COLORS.white,
    marginBottom: RPW(2),
  },
  slider: {
    width: '95%',
    alignSelf: 'center',
    // height: 12,
    marginBottom: Platform.OS == 'android' ? RPW(2) : 0,
  },
});
