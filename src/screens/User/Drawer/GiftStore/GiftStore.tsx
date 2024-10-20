import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/Colors';
import {RPW} from '../../../../utils/ScreenSize';
import StarIcon from '../../../../assets/icons/StarIcon';
import {FONTS} from '../../../../constants/Fonts';
import {CustomBtn} from '../../../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import FirstItem from '../../../../assets/imgs/GiftImgs/FirstItem';
import {CONSTANTS} from '../../../../constants/Constants';

type NavigationName = {
  JourneyStack: {screen: string} | undefined;
};

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

const ItemCard = () => {
  return (
    <View
      style={{
        width: '45%',
        gap: 6,
        alignItems: 'center',
      }}>
      <View
        style={[
          {
            width: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
            gap: 6,
            paddingTop: RPW(3),
            borderRadius: 10,
          },
          Platform.OS == 'ios' ? {...iosShadow} : {elevation: 4},
        ]}>
        <FirstItem />
        <TouchableOpacity
          activeOpacity={CONSTANTS.activeOpacity}
          style={{
            width: '100%',
            backgroundColor: COLORS.main,
            padding: RPW(3),
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomStartRadius: 10,
            borderBottomEndRadius: 10,
          }}>
          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 16,
              fontWeight: '600',
              color: COLORS.white,
            }}>
            تبديل النقاط
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: COLORS.main,
          fontFamily: FONTS.Manuale,
          fontSize: 16,
          fontWeight: '600',
        }}>
        450 نقطة
      </Text>
    </View>
  );
};

const GiftStore = () => {
  const navigation = useNavigation<NavigationProp<NavigationName>>();
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
            // padding: RPW(8),
            // alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: '#DFDFDF',
              paddingVertical: RPW(4),
              paddingHorizontal: RPW(6),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: RPW(2),
              }}>
              <StarIcon />
              <Text
                style={{
                  color: '#B7B7B7',
                  fontFamily: FONTS.Manuale,
                  fontSize: 14,
                }}>
                عدد النقاط
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.main,
                fontFamily: FONTS.Manuale,
                fontSize: 14,
              }}>
              524
            </Text>
          </View>

          <View
            style={{
              padding: RPW(8),
              flex: 1,
            }}>
            <Text
              style={{
                fontFamily: FONTS.Manuale,
                fontSize: 14,
                color: '#333333',
                alignSelf: 'flex-start',
                marginBottom: RPW(3),
              }}>
              ليس لديك نقاط كافية؟
            </Text>
            <CustomBtn
              title="الذهاب لبنك الأسئلة"
              backgroundColor={COLORS.white}
              borderWidth={1}
              titleColor={COLORS.main}
              borderRadius={10}
              onPress={() => {
                navigation.navigate('JourneyStack', {
                  screen: 'QuizBank',
                });
              }}
            />

            <Text
              style={{
                fontFamily: FONTS.Manuale,
                fontSize: 14,
                color: '#333333',
                alignSelf: 'flex-start',
                marginBottom: RPW(3),
                marginTop: RPW(16),
              }}>
              استبدل نقاطك الان
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: RPW(8),
              }}>
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GiftStore;

const styles = StyleSheet.create({});
