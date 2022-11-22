import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RootStackParamList } from './screens/root-stack-params';
import SplashScreen from './screens/splash';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppNavigation;