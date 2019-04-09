import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import LisPlaceScreen from './src/screens/listplace/ListPlace';
import GalleryScreen from './src/screens/gallery/Gallery';
import MapScreen from './src/screens/maps/MapLocation';
import AboutScreen from './src/screens/about/About';

let TabNavigator = createBottomTabNavigator({
    List: LisPlaceScreen,
    Gallery: GalleryScreen,
    Map: MapScreen,
    About: AboutScreen
});

let Navigation = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render(){
        return (
            <Navigation />
        )
    }
}
