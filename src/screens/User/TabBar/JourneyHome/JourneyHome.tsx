import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {FONTS} from '../../../../constants/Fonts';
import CourseOverviewCard from './CourseOverviewCard';
import PhasesData from '../../../../dummy_data/PhasesData.json';
import PhaseCard from './PhaseCard';
import PhaseCardSvg from '../../../../assets/icons/PhaseCardSvg';

const JourneyHome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: RPW(8),
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: RPW(7),
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <ChevronRight />
            </TouchableOpacity>
            <Text
              style={{
                color: '#7B7B7B',
                fontFamily: FONTS.Manuale,
                fontSize: 12,
                fontWeight: '600',
              }}>
              مراحل الدبلومة الشاملة
            </Text>
          </View>

          <CourseOverviewCard />

          <View
            style={{
              marginVertical: RPW(4),
              width: '100%',
              alignItems: 'center',
            }}>
            {PhasesData.map((item, index) => (
              <PhaseCard
                onPress={() => {
                  navigation.navigate('Lesson');
                }}
                key={index}
                index={index}
                item={item}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JourneyHome;

const styles = StyleSheet.create({});
