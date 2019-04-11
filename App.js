import React, {Component} from 'react';
import {Platform} from 'react-native';
import { Provider } from 'react-redux';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import ListPlaceScreen from './src/screens/listplace/ListPlace';
import DetailListPlaceScreen from './src/screens/listplace/DetailListPlace';
import GalleryScreen from './src/screens/gallery/Gallery';
import DetailGalleryScreen from './src/screens/gallery/DetailGallery';
import MapScreen from './src/screens/maps/MapLocation';
import AboutScreen from './src/screens/about/About';

import Icon from './src/components/Icon';

import iconList from './src/images/ic_menu_list.png';
import iconGallery from './src/images/ic_menu_gallery.png';
import iconMaps from './src/images/ic_menu_maps.png';
import iconOther from './src/images/ic_menu_other.png';

import { THEME_COLOR } from './src/data/Constants';

import configureStore from './src/store/configureStore';
const store = configureStore();

const ListStack = createStackNavigator({
    ListHome: {
        screen : ListPlaceScreen,
        navigationOptions: {
            title: 'List Place',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            }
        }
    },
    DetailsList: {
        screen: DetailListPlaceScreen,
        navigationOptions: {
            title: 'Detail List Place',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            }
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

const GalleryStack = createStackNavigator({
    GalleryHome: {
        screen : GalleryScreen,
        navigationOptions: {
            title: 'Gallery',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            }
        }
    },
    DetailGallery: {
        screen: DetailGalleryScreen,
        navigationOptions: {
            title: 'Detail Gallery',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            }
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

const MapStack = createStackNavigator({
    Other: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Maps',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR
            }
        }
    }
});

const AboutStack = createStackNavigator({
    Other: {
        screen: AboutScreen,
        navigationOptions: {
            title: 'Other',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: THEME_COLOR,
                elevation: 0,
                shadowOpacity: 0
            }
        }
    }
});

let TabNavigator = createBottomTabNavigator(
    {
        List: ListStack,
        Gallery: GalleryStack,
        Map: MapStack,
        About: AboutStack
    },{
        initialRouteName: 'List',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'List') {
                    return <Icon image={iconList}/>;
                } else if (routeName === 'Gallery') {
                    return <Icon image={iconGallery}/>;
                } else if (routeName === 'Map') {
                    return <Icon image={iconMaps}/>;
                }
                    return <Icon image={iconOther}/>;
                },
        }),
        tabBarOptions: {
            activeTintColor: THEME_COLOR
        }
    }
);

let Navigation = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        )
    }
}
