import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../../../constants/Colors';
import {RPH, RPW} from '../../../../utils/ScreenSize';
import StarIcon from '../../../../assets/icons/StarIcon';
import {FONTS} from '../../../../constants/Fonts';
import {CustomBtn} from '../../../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import FirstItem from '../../../../assets/imgs/GiftImgs/FirstItem';
import {CONSTANTS} from '../../../../constants/Constants';
import {observer} from 'mobx-react';
import GiftstoreStore, {ProductType} from './GiftstoreStore';
import ProfileStore from '../Profile/ProfileStore';

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

const ItemCard = observer(({item}: {item: ProductType}) => {
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
        {item.image ? (
          <Image
            source={{uri: item.image}}
            style={{
              width: RPW(18),
              height: RPH(10),
              alignSelf: 'center',
            }}
          />
        ) : (
          <FirstItem />
        )}
        <TouchableOpacity
          activeOpacity={CONSTANTS.activeOpacity}
          onPress={() => {
            GiftstoreStore.redeemProduct(item._id);
          }}
          disabled={item.points > ProfileStore.points}
          style={{
            width: '100%',
            backgroundColor:
              item.points > ProfileStore.points ? '#777777' : COLORS.main,
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
        {item.points} نقطة
      </Text>
    </View>
  );
});

const GiftStore = observer(() => {
  const navigation = useNavigation<NavigationProp<NavigationName>>();
  useEffect(() => {
    GiftstoreStore.getAllProducts();
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
              {ProfileStore.points}
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
              {GiftstoreStore.products.map((item, index) => (
                <ItemCard item={item} key={index} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default GiftStore;

const styles = StyleSheet.create({});
