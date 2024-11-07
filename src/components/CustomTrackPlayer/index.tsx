import {
  ActivityIndicator,
  Animated,
  Button,
  Dimensions,
  GestureResponderEvent,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {addTracks, setupPlayer} from '../../utils/trackPlayerServices';
import TrackPlayer, {
  useProgress,
  State,
  useTrackPlayerEvents,
  Event,
  usePlaybackState,
} from 'react-native-track-player';
import {RPH, RPW} from '../../utils/ScreenSize';
import {COLORS} from '../../constants/Colors';
import ProgressBar from '../ProgressBar';
import PlayIcon from '../../assets/icons/TabBarIcons/PlayIcon';
import PauseBtn from '../../assets/icons/VideoPlayer/PauseBtn';
import PauseIcon from '../../assets/icons/TabBarIcons/PauseIcon';
import {useFocusEffect} from '@react-navigation/native';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const generateWaveform = (barsCount: number): number[] => {
  // Generate random heights for bars to simulate waveform
  return Array.from({length: barsCount}, () => Math.random() * 100 + 50); // Height range between 50 and 150
};

const CustomTrackPlayer = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [waveform, setWaveform] = useState([]);
  const progress = useProgress(500);

  const barsCount = 50;

  const playerState = usePlaybackState();

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setWaveform(generateWaveform(barsCount));
    setup();
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setPlaying(false);
        TrackPlayer.pause();
      };
    }, []),
  );

  const togglePlayer = async () => {
    if ((await TrackPlayer.getPlaybackState()).state == State.Playing) {
      setPlaying(false);
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
      setPlaying(true);
    }
  };

  const calculateActiveBars = () => {
    const percentagePlayed = progress.position / progress.duration || 0;
    return Math.floor(percentagePlayed * barsCount);
  };

  const onWaveformPress = async (event: GestureResponderEvent) => {
    const {locationX} = event.nativeEvent;
    const tappedBarIndex = Math.floor((locationX / SCREEN_WIDTH) * barsCount);
    const seekPosition = (tappedBarIndex / barsCount) * progress.duration;

    await TrackPlayer.seekTo(seekPosition);
  };

  const activeBars = calculateActiveBars();

  return (
    <View
      style={[
        styles.container,
        Platform.OS == 'ios' ? {...iosShadow} : {elevation: 4},
      ]}>
      <View
        style={[
          {
            height: '85%',
            paddingHorizontal: RPH(1),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderTopStartRadius: 10,
            borderBottomStartRadius: 10,
            flex: 1,
            zIndex: 1,
          },
        ]}>
        {/* {Array(26)
          .fill(Object.create(null))
          .map((item, index) => (
            <View
              key={index}
              style={{
                height: index % 2 !== 0 ? '70%' : '40%',
                width: 1,
                backgroundColor: '#ED8324',
                zIndex: -2,
              }}
            />
          ))} */}

        {/* Waveform */}
        <View
          onStartShouldSetResponder={() => true}
          onResponderGrant={onWaveformPress}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 20,
            height: '100%',
            width: '100%',
            transform: [{rotate: '180deg'}],
          }}>
          {waveform.map((barHeight, index) => {
            const isActive = index <= activeBars;
            return (
              <Animated.View
                key={index}
                style={{
                  height: barHeight * 0.3,
                  // width: SCREEN_WIDTH / barsCount - 2, // Adjust width based on screen size and bar count
                  width: 1,
                  backgroundColor: isActive ? COLORS.main : '#e0e0df', // Active bars are green, inactive are gray
                  marginHorizontal: 1,
                  borderRadius: 10,
                }}
              />
            );
          })}
        </View>
      </View>

      {!isPlayerReady ? (
        <View
          style={{
            backgroundColor: COLORS.main,
            borderTopEndRadius: 10,
            borderBottomEndRadius: 10,
            padding: RPW(4),
          }}>
          <ActivityIndicator size="large" color={COLORS.white} />
        </View>
      ) : (
        <TouchableOpacity
          onPress={togglePlayer}
          style={{
            backgroundColor: COLORS.main,
            borderTopEndRadius: 10,
            borderBottomEndRadius: 10,
            padding: RPW(4),
            height: RPH(7),
          }}>
          {playing ? (
            <PauseIcon color={COLORS.white} />
          ) : (
            <PlayIcon color={COLORS.white} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTrackPlayer;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    // borderWidth: 1,
    height: RPH(7),
  },
});
