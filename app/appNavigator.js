import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './login/login';
import EmployeeDetails from './login/employeeDetails';
import {fadeIn} from 'react-navigation-transitions';

const handleCustomTransition = ({scenes}) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
  if (
    prevScene &&
    prevScene.route.routeName === 'ScreenA' &&
    nextScene.route.routeName === 'ScreenB'
  ) {
    return fadeIn();
  }
  if (
    prevScene &&
    prevScene.route.routeName === 'ScreenB' &&
    nextScene.route.routeName === 'ScreenC'
  ) {
    return fadeIn();
  }
  return fadeIn();
};

const usermanagement = createStackNavigator(
  {
    Login: {screen: Login, navigationOptions: () => ({header: null})},
  },
  {
    transitionConfig: nav => handleCustomTransition(nav),
  },
);

const dashboard = createStackNavigator(
  {
    EmployeeDetails: {screen: EmployeeDetails},
  },
  {
    headerLayoutPreset: 'center',
    transitionConfig: nav => handleCustomTransition(nav),
  },
);

const RootStack = createSwitchNavigator({
  usermanagement,
  dashboard,
});

const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;
