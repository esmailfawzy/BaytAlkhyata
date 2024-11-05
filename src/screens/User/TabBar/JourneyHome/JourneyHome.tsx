import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {FONTS} from '../../../../constants/Fonts';
import CourseOverviewCard from './CourseOverviewCard';
import PhasesData from '../../../../dummy_data/PhasesData.json';
import PhaseCard from './PhaseCard';
import PhaseCardSvg from '../../../../assets/icons/PhaseCardSvg';
import ChapterStore from './Stores/ChapterStore';
import {observer} from 'mobx-react';
import DiplomasStore from '../../Drawer/Journeys/Stores/DiplomasStore';

const JourneyHome = observer(() => {
  const navigation = useNavigation();

  useEffect(() => {
    ChapterStore.getChapters();
  }, []);
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
                textAlign: 'right',
                alignSelf: 'center',
              }}>
              {'مراحل ' + DiplomasStore.currentDiploma?.title}
            </Text>
          </View>

          <CourseOverviewCard />

          <View
            style={{
              marginVertical: RPW(4),
              width: '100%',
              alignItems: 'center',
            }}>
            {ChapterStore.chapters.map((item, index) => (
              <PhaseCard
                onPress={() => {
                  ChapterStore.setCurrentChapter(item);
                  navigation.navigate('Lesson');
                  console.log(item);
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
});

export default JourneyHome;

const styles = StyleSheet.create({});
