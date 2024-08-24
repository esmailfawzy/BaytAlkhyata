/**
 * @format
 */

import { AppRegistry, I18nManager } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './gesture-handler.native';
import TrackPlayer from 'react-native-track-player';
import { PlaybackService } from './src/utils/trackPlayerServices';

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
