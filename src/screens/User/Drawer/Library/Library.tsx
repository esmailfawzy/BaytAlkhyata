import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
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
import PDFIcon from '../../../../assets/icons/PDFIcon';
import DownIcon from '../../../../assets/icons/DownIcon';
import LibraryStore, {BookType} from './LibraryStore';
import {observer} from 'mobx-react';
import {BASE_URL} from '../../../../constants/AppConfig';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

interface NavTypes {
  PDFViewer: {url: string; title: string};
}

const ItemCard = observer(({item}: {item: BookType}) => {
  const navigation = useNavigation<NavigationProp<NavTypes>>();
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
        <Pressable
          onPress={async () => {
            await LibraryStore.getPDF(item).then(url => {
              navigation.navigate('PDFViewer', {
                url,
                title: item.title,
                // url: `${BASE_URL}/student/library/${item._id}`,
              });
            });
          }}>
          {item.image ? (
            <Image
              source={{uri: item.image}}
              resizeMode="contain"
              style={{
                width: RPW(18),
                height: RPH(10),
                alignSelf: 'center',
              }}
            />
          ) : (
            <PDFIcon />
          )}
        </Pressable>
        <Text
          style={{
            color: COLORS.main,
            fontFamily: FONTS.Manuale,
            fontSize: 16,
            fontWeight: '600',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            color: '#BABABA',
            fontFamily: FONTS.Manuale,
            fontSize: 12,
            fontWeight: '600',
          }}>
          {item.size}
        </Text>
        {LibraryStore.isDownloading ? (
          <View
            style={{
              width: '100%',
              backgroundColor: COLORS.main,
              padding: RPW(2),
              // flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomStartRadius: 10,
              borderBottomEndRadius: 10,
              gap: 6,
            }}>
            <ActivityIndicator size={'small'} color={'white'} />
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              LibraryStore.downloadBook(item);
            }}
            disabled={LibraryStore.isDownloading}
            activeOpacity={CONSTANTS.activeOpacity}
            style={{
              width: '100%',
              backgroundColor: COLORS.main,
              padding: RPW(2),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              borderBottomStartRadius: 10,
              borderBottomEndRadius: 10,
              gap: 6,
            }}>
            <DownIcon />

            <Text
              style={{
                fontFamily: FONTS.Manuale,
                fontSize: 16,
                fontWeight: '600',
                color: COLORS.white,
              }}>
              تحميل
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

const Library = observer((): React.JSX.Element => {
  useEffect(() => {
    LibraryStore.getAllBooks();
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
          <Text
            style={{
              fontFamily: FONTS.Manuale,
              fontSize: 20,
              color: '#333333',
              // alignSelf: 'flex-start',
              marginBottom: RPW(10),
              // marginTop: RPW(16),
            }}>
            المكتبة
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: RPW(8),
            }}>
            {LibraryStore.books.map((item, index) => (
              <ItemCard item={item} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default Library;

const styles = StyleSheet.create({});
