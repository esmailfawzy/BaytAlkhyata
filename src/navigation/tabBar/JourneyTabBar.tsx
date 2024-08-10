import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JourneyHome from '../../screens/User/TabBar/JourneyHome/JourneyHome';
import Notifications from '../../screens/User/TabBar/Notifications/Notifications';
import {Text, View} from 'react-native';
import {RPW} from '../../utils/ScreenSize';
import {Journeys} from '../../screens';
import JourneyStack from '../stacks/JourneyStack';

const Tab = createBottomTabNavigator();

const JourneyTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="JourneyStack"
      safeAreaInsets={{
        bottom: RPW(8),
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="JourneyStack" component={JourneyStack} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
};

export default JourneyTabBar;
