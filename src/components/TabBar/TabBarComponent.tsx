import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {RPW} from '../../utils/ScreenSize';
import {COLORS} from '../../constants/Colors';
import HomeIcon from '../../assets/icons/TabBarIcons/HomeIcon';
import NotificationIcon from '../../assets/icons/TabBarIcons/NotificationIcon';
import TabBarBtn from './TabBarBtn';
import PlayIcon from '../../assets/icons/TabBarIcons/PlayIcon';
import ContactusIcon from '../../assets/icons/TabBarIcons/ContactusIcon';

const iosShadow = {
  shadowOpacity: 0.15,
  shadowColor: '#080808',
  shadowOffset: {
    height: 0,
    width: 0,
  },
};

const TabBarComponent = ({
  descriptors,
  navigation,
  state,
}: BottomTabBarProps) => {
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: COLORS.white,
        },
        Platform.OS == 'android' ? {elevation: 4} : {...iosShadow},
      ]}>
      <View
        style={[
          {
            paddingHorizontal: RPW(6),
            paddingVertical: RPW(4),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          },
        ]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabBarBtn
              isFocused={isFocused}
              onLongPress={onLongPress}
              onPress={onPress}
              options={options}
              key={index}>
              {label == 'Notifications' && (
                <NotificationIcon
                  color={isFocused ? COLORS.white : COLORS.black}
                />
              )}
              {label == 'JourneyStack' && (
                <HomeIcon color={isFocused ? COLORS.white : COLORS.black} />
              )}
              {label == 'PlayVideoStack' && (
                <PlayIcon color={isFocused ? COLORS.white : COLORS.black} />
              )}
              {label == 'ContactUs' && (
                <ContactusIcon
                  color={isFocused ? COLORS.white : COLORS.black}
                />
              )}
            </TabBarBtn>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBarComponent;

const styles = StyleSheet.create({});
