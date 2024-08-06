import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {RefObject, useRef} from 'react';
import {
  SheetManager,
  useSheetRef,
  useSheetRouter,
} from 'react-native-actions-sheet';
import {RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import CustomVideoPlayer from '../../Video/CustomViedeoPlayer';
import {FONTS} from '../../../../constants/Fonts';
import {CONSTANTS} from '../../../../constants/Constants';

const OverView = () => {
  const router = useSheetRouter('course-overview');
  const ref = useSheetRef<'course-overview'>();
  const videoRefs = useRef();
  const pauseAllVideos = async () => {
    for (let refIndex in videoRefs.current) {
      const ref = videoRefs.current[refIndex];
      if (ref && ref.pause) {
        await ref.pause();
      }
    }
  };

  return (
    <View
      style={{
        // paddingVertical: RPW(5),
        paddingBottom: RPW(5),
        width: '100%',
        height: '100%',
        gap: RPW(5),
        backgroundColor: COLORS.white,
      }}>
      <CustomVideoPlayer
        ref={el => (videoRefs.current = el)}
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        componentStyle={styles.videoPlayer}
        resizeMode="cover"
        isSoundButton={true}
      />
      <ScrollView
        style={{
          width: '100%',
          flexShrink: 1,
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: RPW(5),
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 14,
              fontWeight: 'bold',
              color: COLORS.main,
              textAlign: 'left',
              marginBottom: RPW(7),
            }}>
            ماذا سوف تتعلم ؟
          </Text>
          {[1, 2, 3, 4, 5].map((item, id) => (
            <View
              key={id}
              style={{
                width: '100%',
                alignItems: 'flex-start',
                marginBottom: RPW(4),
              }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontFamily: FONTS.Manuale,
                  fontSize: 14,
                  textAlign: 'left',
                }}>
                أساسيات الخياطة:{'\n'}
                <Text
                  style={{
                    color: '#959595',
                  }}>
                  {`
فهم الأدوات والمعدات الأساسية.
التعرف على أنواع الأقمشة المختلفة وكيفية التعامل معها.
تعلم تقنيات الخياطة الأساسية مثل الغرز والدرزات.
      `}
                </Text>
              </Text>
              <View
                style={{
                  height: 1,
                  width: RPW(100),
                  backgroundColor: '#CBCBCB',
                  alignSelf: 'center',
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: RPW(5),
          marginBottom: Platform.OS == 'android' ? RPW(4) : 0,
        }}>
        <TouchableOpacity
          activeOpacity={CONSTANTS.activeOpacity}
          onPress={() => {
            router.navigate('route-b', {param: 'value'});
          }}
          style={{
            height: 37,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FAB65E',
            padding: 10,
            borderRadius: 8,
            width: '60%',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: COLORS.white,
              textAlign: 'center',
            }}>
            الشراء
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={CONSTANTS.activeOpacity}
          onPress={() => {
            SheetManager.hide('course-overview');
          }}
          style={{
            height: 37,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            padding: 10,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#FAB65E',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#FAB65E',
            }}>
            العودة
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({
  videoPlayer: {
    width: '100%',
    height: '100%',
  },
});
