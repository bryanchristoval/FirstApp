import LandingScreen from './src/screen/LandingScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


const navigator = createStackNavigator({
  Search: LandingScreen
}, {
  initialRouteName:'Search',
  defaultNavigationOptions: {
    title: 'Dashboard',
    header: null,
  }
});

export default createAppContainer(navigator);