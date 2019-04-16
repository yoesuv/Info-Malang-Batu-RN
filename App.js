import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Icon from './src/components/Icon';

import iconList from './src/images/ic_menu_list.png';
import iconListSelected from './src/images/ic_menu_list_selected.png';
import iconGallery from './src/images/ic_menu_gallery.png';
import iconGallerySelected from './src/images/ic_menu_gallery_selected.png';
import iconMaps from './src/images/ic_menu_maps.png';
import iconMapsSelected from './src/images/ic_menu_maps_selected.png';
import iconOther from './src/images/ic_menu_other.png';
import iconOtherSelected from './src/images/ic_menu_other_selected.png';

import { THEME_COLOR } from './src/data/Colors';

import { ListStack } from './src/routes/ListRoute';
import { GalleryStack } from './src/routes/GalleryRoute';
import { MapStack } from './src/routes/MapRoute';
import { AboutStack } from './src/routes/AboutRoute';

import configureStore from './src/store/configureStore';
const store = configureStore();

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
                    if (focused) {
                        return <Icon image={iconListSelected}/>;
                    }
                    return <Icon image={iconList}/>;
                } else if (routeName === 'Gallery') {
                    if (focused) {
                        return <Icon image={iconGallerySelected}/>;
                    }
                    return <Icon image={iconGallery}/>;
                } else if (routeName === 'Map') {
                    if (focused) {
                        return <Icon image={iconMapsSelected}/>;
                    }
                    return <Icon image={iconMaps}/>;
                }
                    if (focused) {
                        return <Icon image={iconOtherSelected}/>;
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
