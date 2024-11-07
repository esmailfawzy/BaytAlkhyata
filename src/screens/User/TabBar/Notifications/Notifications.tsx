import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SectionList,
} from 'react-native';
import React, {useState} from 'react';
import {RPW} from '../../../../utils/ScreenSize';
import ChevronRight from '../../../../assets/icons/ChevronRight';
import {useNavigation} from '@react-navigation/native';
import {FONTS} from '../../../../constants/Fonts';
import {COLORS} from '../../../../constants/Colors';
import EmptyNotification from '../../../../assets/icons/EmptyNotification';
import NotificationCard from './NotificationCard';

const Notifications = () => {
  const navigation = useNavigation();
  // const [notifications, setNotifications] = useState([]);

  const [notifications, setNotifications] = useState([
    {
      title: 'اليوم',
      data: [
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'اليوم',
        },
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'اليوم',
        },
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'اليوم',
        },
      ],
    },
    {
      title: 'من اسبوع',
      data: [
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'من أسبوع',
        },
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'من أسبوع',
        },
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'من أسبوع',
        },
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'من أسبوع',
        },
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'من أسبوع',
        },
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'من أسبوع',
        },
        {
          title:
            'نشكر لك انضمامك إلى كورس تعلم الخياطة لدينا! نحن متحمسون لمساعدتك على تحقيق أهدافك في تعلم الخياطة وتصميم الأزياء. ',
          time: 'من دقيقة',
          date: 'من أسبوع',
        },
      ],
    },
  ]);

  if (notifications.length == 0) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
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
              justifyContent: 'flex-start',
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
                color: COLORS.black,
                fontFamily: FONTS.Manuale,
                fontSize: 16,
                fontWeight: '600',
                textAlign: 'center',
                width: '100%',
              }}>
              الرسائل
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EmptyNotification />
            <Text
              style={{
                color: '#434343',
                fontSize: 18,
                fontFamily: FONTS.Manuale,
                fontWeight: '600',
                marginTop: RPW(18),
                marginBottom: RPW(3),
              }}>
              لا يوجد رسائل
            </Text>

            <Text
              style={{
                color: '#BABABA',
                fontSize: 18,
                fontFamily: FONTS.Manuale,
                fontWeight: '600',
              }}>
              القي نظرة مرة أخري قد يكون هنالك رسائل
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        {/* <ScrollView> */}
        <View
          style={{
            flex: 1,
            padding: RPW(8),
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
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
                color: COLORS.black,
                fontFamily: FONTS.Manuale,
                fontSize: 16,
                fontWeight: '600',
                textAlign: 'center',
                width: '100%',
              }}>
              الرسائل
            </Text>
          </View>
          {/* {notifications.map((item, index) => (
              <NotificationCard item={item} index={index} />
            ))} */}
          <SectionList
            sections={notifications}
            renderItem={({item, index}) => (
              <NotificationCard item={item} index={index} />
            )}
            renderSectionHeader={({section}) => (
              <View
                style={{
                  width: '95%',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginBottom: RPW(10),
                }}>
                <Text style={styles.taskTitle}>{section.title}</Text>
              </View>
            )}
            // SectionSeparatorComponent={() => (
            //   <View
            //     style={{
            //       width: '95%',
            //       height: 1,
            //       backgroundColor: 'red',
            //       marginVertical: 26,
            //     }}
            //   />
            // )}
            keyExtractor={(item, index) => index.toString()}
            stickyHeaderHiddenOnScroll={false}
            stickySectionHeadersEnabled={false}
            bounces={false}
          />
        </View>

        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
};

export default Notifications;

const styles = StyleSheet.create({
  taskTitle: {
    color: '#A6A6A6',
    fontSize: 18,
    fontWeight: '500',
    // textAlign: 'left',
  },
});
