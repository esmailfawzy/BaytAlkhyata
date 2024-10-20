import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {RPW} from '../../../utils/ScreenSize';
import {FONTS} from '../../../constants/Fonts';
import {COLORS} from '../../../constants/Colors';

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
        width: '100%',
        gap: RPW(3),
        alignItems: 'flex-start',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          fontSize: 16,
          color: '#707070',
          fontFamily: FONTS.Manuale,
          fontWeight: '400',
        }}>
        الحقل الأول
      </Text>

      <View
        style={{
          backgroundColor: '#F9F9F9',
          padding: RPW(3),
          borderBottomWidth: 3,
          borderBottomColor: '#FAB65E',
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: FONTS.Manuale,
            fontSize: 14,
            color: COLORS.black,
            textAlign: 'left',
          }}>
          لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل
          وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
          ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
          مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب
          بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على
          هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد
          الإلكتروني.
        </Text>
      </View>
    </View>
  );
};

const PrivacyPolicy = () => {
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
          }}>
          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 20,
              color: '#333333',
              alignSelf: 'flex-start',
              marginBottom: RPW(10),
              // marginTop: RPW(16),
            }}>
            سياسة الخصوصية والأمان
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: RPW(6),
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
