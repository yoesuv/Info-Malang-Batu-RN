import { createStackNavigator } from "react-navigation";

import { THEME_COLOR, HEADER_TINT_COLOR } from '../data/Colors';
import { MyHeader } from './Header';

import AboutScreen from '../screens/about/About';

export const AboutStack = createStackNavigator({
    Other: {
        screen: AboutScreen,
        navigationOptions: {
            title: 'Other',
            headerTintColor: HEADER_TINT_COLOR,
            headerStyle: {
                backgroundColor: THEME_COLOR,
                elevation: 0,
                shadowOpacity: 0
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    }
});
