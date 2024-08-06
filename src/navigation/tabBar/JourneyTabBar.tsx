import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JourneyHome from '../../screens/User/TabBar/JourneyHome/JourneyHome';
import Notifications from '../../screens/User/TabBar/Notifications/Notifications';
import {Text, View} from 'react-native';
import {RPW} from '../../utils/ScreenSize';

const Tab = createBottomTabNavigator();

const JourneyTabBar = () => {
  return (
    <Tab.Navigator
      safeAreaInsets={{
        bottom: RPW(8),
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="JourneyHome" component={JourneyHome} />
    </Tab.Navigator>
  );
};

export default JourneyTabBar;
