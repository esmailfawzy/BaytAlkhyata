import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from '../../../../components/ProgressBar';
import RewardIcon from '../../../../assets/icons/RewardIcon';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {COLORS} from '../../../../constants/Colors';
import {FONTS} from '../../../../constants/Fonts';
import {IMGS} from '../../../../assets';

interface KnownTypes {
  item: any;
  index: number;
  onPress: () => void;
}

const PhaseCard = ({item, index, onPress}: KnownTypes) => {
  return (
    <LinearGradient
      colors={item.isActive ? ['#3B92D2', '#245093'] : ['#AEAEAE', '#AEAEAE']}
      style={[
        styles.container,
        item.isActive
          ? {
              paddingHorizontal: RPW(4),
              paddingBottom: RPW(4),
            }
          : {
              padding: RPW(3),
            },
      ]}>
      <TouchableOpacity onPress={onPress} disabled={!item.isActive}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            alignSelf: 'center',
            marginBottom: RPW(3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {item.isActive ? <ChevronRight color={COLORS.white} /> : <></>}
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginStart: 14,
              }}>
              <Text
                style={{
                  fontFamily: FONTS.Manuale,
                  color: COLORS.white,
                  fontSize: 14,
                  fontWeight: '600',
                }}>
                المرحلة الأولي
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Manuale,
                  color: COLORS.white,
                  fontSize: 12,
                  fontWeight: '400',
                }}>
                الباترون
              </Text>
            </View>
          </View>
          {item.isActive ? (
            <RewardIcon />
          ) : (
            <Image
              source={IMGS.JourneyLock}
              resizeMode="contain"
              style={{
                width: RPW(12),
                height: RPW(12),
                // position: 'absolute',
                // end: RPW(8),
                // top: RPW(2),
                // zIndex: -1,
                opacity: 0.5,
              }}
            />
          )}
        </View>
        {item.isActive ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                alignSelf: 'center',
                marginBottom: RPW(3),
              }}>
              <Text
                style={{
                  fontFamily: FONTS.Manuale,
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLORS.white,
                }}>
                عدد الامتحانات
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Manuale,
                  color: COLORS.white,
                  fontSize: 12,
                  fontWeight: '700',
                }}>
                <Text
                  style={{color: '#FAB65E'}}>{`${item.totalExams} / `}</Text>
                {item.passedExams}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                alignSelf: 'center',
                marginBottom: RPW(3),
              }}>
              <Text
                style={{
                  fontFamily: FONTS.Manuale,
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLORS.white,
                }}>
                النقاط الحاصل عليها
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Manuale,
                  color: COLORS.white,
                  fontSize: 12,
                  fontWeight: '700',
                }}>
                {item.totalPoints}
              </Text>
            </View>
          </>
        ) : (
          <></>
        )}
      </TouchableOpacity>
      {item.isActive ? <ProgressBar progress={65} /> : <></>}
    </LinearGradient>
  );
};

export default PhaseCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: RPW(8),
    width: '95%',
    // minHeight: RPH(17),

    borderRadius: 8,
  },
});
