import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import Spinner from 'react-native-loading-spinner-overlay';
import Slider from '@react-native-community/slider';
import styles from './styles'; // Assume styles are defined in a separate file
import {COLORS} from '../../../constants/Colors';
import PlayBtn from '../../../assets/icons/VideoPlayer/PlayBtn';
import PauseBtn from '../../../assets/icons/VideoPlayer/PauseBtn';
import SoundOn from '../../../assets/icons/VideoPlayer/SoundOn';
import SoundOff from '../../../assets/icons/VideoPlayer/SoundOff';
import LinearGradient from 'react-native-linear-gradient';
import FullScreen from '../../../assets/icons/VideoPlayer/FullScreen';
// import colors from './colors'; // Assume colors are defined in a separate file
// import images from './images'; // Assume images are defined in a separate file
import Orientation from 'react-native-orientation-locker';

type VPTypes = {
  source: any;
  componentStyle: any;
  resizeMode: any;
  isSoundButton: any;
};

const CustomVideoPlayer = forwardRef(
  ({source, componentStyle, resizeMode, isSoundButton}: VPTypes, ref) => {
    const [paused, setPaused] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoPlayer = useRef<any>(null);
    const [loading, setLoading] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [videoVolume, setVideoVolume] = useState(1.0);
    const [isControlsShown, setIsControlsShown] = useState(true);

    useEffect(() => {
      Orientation.unlockAllOrientations();

      return () => Orientation.lockToPortrait();
    }, []);

    useImperativeHandle(ref, () => ({
      play: () => {
        if (currentTime !== 0) setPaused(false);
      },
      pause: () => {
        setPaused(true);
      },
      stop: () => {
        setPaused(true);
        videoPlayer.current.seek(0);
        setCurrentTime(0);
      },
      seek: (time: any) => {
        videoPlayer.current.seek(time);
        setCurrentTime(time);
      },
    }));

    const togglePlayPause = () => setPaused(!paused);

    const onProgress = (data: any) => setCurrentTime(data.currentTime);

    const onEnd = () => {
      setPaused(true);
      setTimeout(() => {
        videoPlayer.current.seek(0);
      }, 200);
      setCurrentTime(0);
    };

    const onLoad = (data: any) => {
      setLoading(false);
      console.log('loading ended');
      setDuration(data.duration);
    };

    const onSlide = (value: any) => {
      videoPlayer.current.seek(value);
      setCurrentTime(value);
    };

    const formatTime = (timeInSeconds: any) => {
      if (isNaN(timeInSeconds)) return '00:00';
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${minutes < 10 ? '0' : ''}${minutes}:${
        seconds < 10 ? '0' : ''
      }${seconds}`;
    };

    const onBuffer = ({isBuffering}: {isBuffering: boolean}) =>
      setLoading(isBuffering);

    const toggleMute = () => setVideoVolume(videoVolume === 0.0 ? 1.0 : 0.0);
    const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

    return (
      <View
        onTouchStart={() => {
          setIsControlsShown(true);
        }}
        onTouchEnd={() => {
          setTimeout(() => {
            setIsControlsShown(false);
          }, 3000);
        }}
        style={styles.container}>
        <Video
          ref={videoPlayer}
          source={source}
          style={componentStyle}
          paused={paused}
          onProgress={onProgress}
          onEnd={onEnd}
          onLoad={onLoad}
          // onBuffer={({isBuffering}) => {
          //   setLoading(isBuffering);
          // }}
          volume={videoVolume}
          resizeMode={resizeMode}
          repeat={false}
          fullscreen={isFullScreen}
          onFullscreenPlayerDidDismiss={toggleFullScreen}
          bufferConfig={{
            minBufferMs: 15000,
            maxBufferMs: 30000,
            bufferForPlaybackMs: 2500,
            bufferForPlaybackAfterRebufferMs: 5000,
          }}
        />
        {loading && <ActivityIndicator size={'large'} color={COLORS.white} />}
        {isControlsShown && (
          <LinearGradient
            colors={['#00000000', '#00000044', '#000000']}
            style={styles.controls}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}>
            <View style={styles.controlRow}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 5,
                }}>
                <TouchableOpacity
                  onPress={toggleFullScreen}
                  style={styles.controlButton}>
                  <FullScreen />
                </TouchableOpacity>
                {isSoundButton && (
                  <TouchableOpacity
                    onPress={toggleMute}
                    style={styles.controlButton}>
                    {videoVolume === 0.0 ? <SoundOff /> : <SoundOn />}
                  </TouchableOpacity>
                )}
              </View>
              <TouchableOpacity
                onPress={togglePlayPause}
                style={styles.controlButton}>
                {paused ? <PlayBtn /> : <PauseBtn />}
              </TouchableOpacity>
            </View>
            <View style={styles.slider}>
              <Slider
                style={{flex: 1}}
                minimumValue={0}
                maximumValue={duration}
                value={currentTime}
                onValueChange={onSlide}
                minimumTrackTintColor={COLORS.white}
                maximumTrackTintColor={'#959595'}
                thumbTintColor={COLORS.main}
              />
            </View>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
              <Text style={styles.timeText}>{formatTime(duration)}</Text>
            </View>
          </LinearGradient>
        )}
      </View>
    );
  },
);

export default CustomVideoPlayer;
