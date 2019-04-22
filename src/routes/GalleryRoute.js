import { createStackNavigator } from "react-navigation";

import { THEME_COLOR, HEADER_TINT_COLOR } from '../data/Colors';
import { MyHeader } from './Header';

import GalleryScreen from '../screens/gallery/Gallery';
import DetailGalleryScreen from '../screens/gallery/DetailGallery';

export const GalleryStack = createStackNavigator({
    GalleryHome: {
        screen : GalleryScreen,
        navigationOptions: {
            title: 'Gallery',
            headerTintColor: HEADER_TINT_COLOR,
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    },
    DetailGallery: {
        screen: DetailGalleryScreen,
        navigationOptions: {
            title: 'Detail Gallery',
            headerTintColor: HEADER_TINT_COLOR,
            headerStyle: {
                backgroundColor: THEME_COLOR
            },
            headerTitleStyle: [ MyHeader.titleStyle ]
        }
    }
});

GalleryStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};
