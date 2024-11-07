import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import CustomTrackPlayer from '../../../../components/CustomTrackPlayer';
import CustomVideoPlayer from '../../Video/CustomViedeoPlayer';
import {FONTS} from '../../../../constants/Fonts';
import DownloadIcon from '../../../../assets/icons/DownloadIcon';
import LessonImage from '../../../../assets/imgs/LessonImage';
import {CustomBtn} from '../../../../components';
import YoutubePlayer from 'react-native-youtube-iframe';
import RenderSections from '../Lesson/RenderSections';
import Lesson from '../Lesson/Lesson';

const PlayVideo = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Lesson />
    </View>
  );
};

export default PlayVideo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: RPW(3),
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
  },
});
