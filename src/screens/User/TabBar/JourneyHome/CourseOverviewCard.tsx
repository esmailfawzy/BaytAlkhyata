import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import {COLORS} from '../../../../constants/Colors';
import ProgressBar from '../../../../components/ProgressBar';
import {FONTS} from '../../../../constants/Fonts';
import StarIcon from '../../../../assets/icons/StarIcon';
import {observer} from 'mobx-react';
import ProfileStore from '../../Drawer/Profile/ProfileStore';

const iosShadow = {
  shadowOpacity: 0.15,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

const CourseOverviewCard = observer(() => {
  return (
    <View
      style={[
        {
          width: '100%',
          height: RPH(15),
          borderRadius: 10,
          borderEndWidth: 5,
          borderEndColor: '#FAB65E',
          padding: RPH(2),
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: RPH(4),
        },
        Platform.OS == 'ios' ? {...iosShadow} : {elevation: 0},
      ]}>
      <ProgressBar progress={65} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '95%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '30%',
          }}>
          <StarIcon />
          <Text style={styles.title}>عدد النقاط</Text>
        </View>
        <Text style={[styles.subTitle, {color: COLORS.main}]}>
          {ProfileStore.points}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '95%',
          // marginVertical: RPW(2),
        }}>
        <Text style={styles.title}>مجموع الساعات</Text>
        <Text style={styles.subTitle}>524</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '95%',
          // marginVertical: RPW(2),
        }}>
        <Text style={styles.title}>مجموع المشاهدات</Text>
        <Text style={styles.subTitle}>524</Text>
      </View>
    </View>
  );
});

export default CourseOverviewCard;

const styles = StyleSheet.create({
  title: {
    fontSize: RPW(3),
    color: '#B7B7B7',
    fontFamily: FONTS.Manuale,
    fontWeight: '600',
  },
  subTitle: {
    color: '#434343',
    fontFamily: FONTS.Manuale,
    fontSize: RPW(3),
    fontWeight: '600',
  },
});
