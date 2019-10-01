import { createStackNavigator } from "react-navigation-stack";

import { THEME_COLOR, HEADER_TINT_COLOR } from '../data/Colors';
import { MyHeader } from './Header';

import ListPlaceScreen from '../screens/listplace/ListPlace';
import DetailListPlaceScreen from '../screens/listplace/DetailListPlace';

export const ListStack = createStackNavigator({
    ListHome: {
        screen : ListPlaceScreen,
        navigationOptions: {
            title: 'List Place',
            headerTintColor: HEADER_TINT_COLOR,
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    },
    DetailsList: {
        screen: DetailListPlaceScreen,
        navigationOptions: {
            title: 'Detail Place',
            headerTintColor: HEADER_TINT_COLOR,
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    }
});

ListStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
