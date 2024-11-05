import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RPW} from '../../../../utils/ScreenSize';
import {FONTS} from '../../../../constants/Fonts';
import {COLORS} from '../../../../constants/Colors';
import {server} from '../../../../utils/ServerConfig';
import GlobalStore from '../../../../utils/GlobalStore';
import {observer} from 'mobx-react';
import AuthStore from '../../../Auth/Stores/AuthStore';
import {useNavigation} from '@react-navigation/native';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

const ItemCard = ({item}: {item: PrivacyField}) => {
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
        {item.title}
      </Text>

      <View
        style={{
          backgroundColor: '#F9F9F9',
          padding: RPW(3),
          borderBottomWidth: 3,
          borderBottomColor: '#FAB65E',
          borderRadius: 10,
          width: '100%',
        }}>
        <Text
          style={{
            fontFamily: FONTS.Manuale,
            fontSize: 14,
            color: COLORS.black,
            textAlign: 'left',
          }}>
          {item.content}
        </Text>
      </View>
    </View>
  );
};

interface PrivacyField {
  _id: string;
  title: string;
  content: string;
}

const PrivacyPolicy = observer(() => {
  const navigation = useNavigation();
  const [privacyItems, setPrivacyItems] = useState<Array<PrivacyField>>([]);

  useEffect(() => {
    getPrivacyPolicy();
  }, []);

  const getPrivacyPolicy = async () => {
    try {
      const res = await server.get('/student/policy', {
        headers: {Authorization: 'Bearer ' + GlobalStore.jwtToken},
      });
      if (res.status == 200) {
        setPrivacyItems(res.data.result);
      }
    } catch (error) {
      console.error('error getting privacy policy,', error);
      if (error == 'Authentication Fail') {
        AuthStore.doLogout(navigation);
      }
    }
  };

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
            {privacyItems.map((item, index) => (
              <ItemCard item={item} key={item._id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default PrivacyPolicy;

const styles = StyleSheet.create({});
