import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import LisPlaceScreen from './src/screens/listplace/ListPlace';
import GalleryScreen from './src/screens/gallery/Gallery';
import MapScreen from './src/screens/maps/MapLocation';
import AboutScreen from './src/screens/about/About';

import Icon from './src/components/Icon';

import iconList from './src/images/ic_menu_list.png';
import iconGallery from './src/images/ic_menu_gallery.png';
import iconMaps from './src/images/ic_menu_maps.png';
import iconOther from './src/images/ic_menu_other.png';

let TabNavigator = createBottomTabNavigator(
    {
        List: LisPlaceScreen,
        Gallery: GalleryScreen,
        Map: MapScreen,
        About: AboutScreen
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
            activeTintColor: '#009688',
            inactiveTintColor: '#009688',
        }
    }
);

let Navigation = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render(){
        return (
            <Navigation />
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
});
