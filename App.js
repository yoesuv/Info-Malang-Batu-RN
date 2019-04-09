import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import LisPlaceScreen from './src/screens/ListPlace';
import GalleryScreen from './src/screens/Gallery';
import MapScreen from './src/screens/MapLocation';
import AboutScreen from './src/screens/About';

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
