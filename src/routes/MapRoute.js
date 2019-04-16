import { createStackNavigator } from "react-navigation";

import { THEME_COLOR, HEADER_TINT_COLOR } from '../data/Colors';
import { MyHeader } from './Header';

import MapScreen from '../screens/maps/MapLocation';

export const MapStack = createStackNavigator({
    Other: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Maps',
            headerTintColor: HEADER_TINT_COLOR,
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    }
});
