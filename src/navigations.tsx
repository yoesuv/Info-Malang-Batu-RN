import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { THEME_COLOR, THEME_COLOR_700 } from './data/colors';
import DetailGalleryScreen from './screens/detail-gallery';
import DetailListPlaceScreen from './screens/detail-list-place';
import HomeScreen from './screens/home';
import { RootStackParamList } from './screens/root-stack-params';
import SplashScreen from './screens/splash';

const Stack = createNativeStackNavigator<RootStackParamList>();

const baseOptions: NativeStackNavigationOptions = {
    headerShown: false,
    statusBarColor: THEME_COLOR_700,
}

const AppNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={SplashScreen} options={{...baseOptions, statusBarColor: THEME_COLOR}} />
            <Stack.Screen name='Home' component={HomeScreen} options={{...baseOptions}} />
            <Stack.Screen name='DetailPlace' component={DetailListPlaceScreen} options={{...baseOptions}} />
            <Stack.Screen name='DetailGallery' component={DetailGalleryScreen} options={{...baseOptions}} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppNavigation;