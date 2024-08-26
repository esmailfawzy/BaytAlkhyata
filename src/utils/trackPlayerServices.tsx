import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
        Capability.SetRating,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SetRating,
      ],
      progressUpdateEventInterval: 2,
    });
    TrackPlayer.setVolume(1);
    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTracks(audioLink?: string) {
  await TrackPlayer.add([
    {
      id: '1',
      url: audioLink || 'https://webaudioapi.com/samples/audio-tag/chrono.mp3',
      title: 'Test Audio',
      artist: 'Unknown',
      // duration: 60,
    },
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export const PlaybackService = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemoteNext, () =>
    TrackPlayer.skipToNext(),
  );
  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );
  // ...
};
