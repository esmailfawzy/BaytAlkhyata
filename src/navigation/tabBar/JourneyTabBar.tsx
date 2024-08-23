import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RPW} from '../../utils/ScreenSize';
import TabBarComponent from '../../components/TabBar/TabBarComponent';
import JourneyStack from '../stacks/JourneyStack';
import PlayVideoStack from '../stacks/PlayVideoStack';
import Notifications from '../../screens/User/TabBar/Notifications/Notifications';
import ContactUs from '../../screens/User/TabBar/ContactUs';

const Tab = createBottomTabNavigator();

const JourneyTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="JourneyStack"
      // safeAreaInsets={{
      //   bottom: RPW(8),
      // }}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBarComponent {...props} />}>
      <Tab.Screen name="JourneyStack" component={JourneyStack} />
      <Tab.Screen name="PlayVideoStack" component={PlayVideoStack} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="ContactUs" component={ContactUs} />
    </Tab.Navigator>
  );
};

export default JourneyTabBar;
