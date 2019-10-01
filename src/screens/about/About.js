import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { THEME_COLOR } from '../../data/Colors';

import InformationScreen from './Information';
import ChangelogScreen from './Changelog';
import ThanksScreen from './Thanks';
import LibrariesScreen from './Libraries';

class AboutScreen extends Component {

    render () {
        return (
            <View style={{flex:1}}>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    viewPagerContainer: {
        flex:1,
        flexDirection: 'column-reverse',
    },
    indicatorContainer: {
        backgroundColor: THEME_COLOR
    },
    indicatorText: {
        fontSize: 14,
        color: 0xFFFFFF99
    },
    indicatorSelectedText: {
        fontSize: 14,
        color: 0xFFFFFFFF
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: 'white'
    }
})

export default AboutScreen;
