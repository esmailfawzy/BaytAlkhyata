import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RPW} from '../../../../../utils/ScreenSize';
import LogoSvg from '../../../../../assets/imgs/Logo';
import {FONTS} from '../../../../../constants/Fonts';
import {COLORS} from '../../../../../constants/Colors';
import LevelStore, {SectionItemType} from '../Stores/LevelStore';
import {observer} from 'mobx-react';
import PlayBtn from '../../../../../assets/icons/VideoPlayer/PlayBtn';

const iosShadow = {
  shadowOpacity: 0.2,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};
const LevelCard = observer(({item}: {item: SectionItemType}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (item.itemType == 'quiz' || item.type == 'quiz') {
          console.log('item', item);
        } else {
          LevelStore.getSectionItem(item._id);
        }
      }}
      style={[
        {
          backgroundColor: COLORS.white,
          width: '100%',
          alignSelf: 'center',
          // padding: RPW(3),
          borderBottomWidth: 1,
          padding: RPW(4),
          borderBottomColor: '#08080826',
        },
        // Platform.OS == 'ios' ? {...iosShadow} : {elevation: 4},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.black,
            textAlign: 'left',
            fontFamily: FONTS.Manuale,
          }}>
          {item.title}
        </Text>

        {item.type == 'video' && <PlayBtn />}
      </View>
    </TouchableOpacity>
  );
});

export default LevelCard;

const styles = StyleSheet.create({});
