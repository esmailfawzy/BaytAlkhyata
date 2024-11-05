import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  LayoutChangeEvent,
} from 'react-native';
import {COLORS} from '../constants/Colors';
import {RPH, RPW} from '../utils/ScreenSize';
import {observer} from 'mobx-react';

interface ProgressBarProps {
  progress: number; // Progress is a percentage value (0 to 100)
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = observer(
  ({progress, color = COLORS.main}) => {
    const [width, setWidth] = useState<number>(0);
    const animatedWidth = new Animated.Value(0);

    useEffect(() => {
      Animated.timing(animatedWidth, {
        toValue: (progress / 100) * width,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, [progress, width]);

    const handleLayout = (e: LayoutChangeEvent) => {
      setWidth(e.nativeEvent.layout.width);
    };

    return (
      <View style={styles.container} onLayout={handleLayout}>
        <Animated.View style={[styles.progress, {width: animatedWidth}]}>
          <View
            style={[
              styles.gradient,
              {
                backgroundColor: color,
              },
            ]}>
            <Text style={styles.progressText}>{`${progress}%`}</Text>
          </View>
        </Animated.View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    height: RPH(1.5),
    width: '95%',
    backgroundColor: '#e0e0df',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  progress: {
    height: '100%',
    borderRadius: 10,
  },
  gradient: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: RPW(2),
    // alignSelf: 'center',
    textAlignVertical: 'center',
  },
});

export default ProgressBar;
