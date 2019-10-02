import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { THEME_COLOR } from '../../data/Colors';

import InformationScreen from './Information';
import ChangelogScreen from './Changelog';
import ThanksScreen from './Thanks';
import LibrariesScreen from './Libraries';

const InformationRoute = () => (
    <InformationScreen />
)

const ChangelogRoute = () => (
    <ChangelogScreen  />
)

const ThanksRoute = () => (
    <ThanksScreen />
)

const LibrariesRoute = () => (
    <LibrariesScreen />
)

class AboutScreen extends Component {

    state = {
        index: 0,
        routes: [
            {key: 'information', title: 'Information'},
            {key: 'changelog', title: 'Changelog'},
            {key: 'thanks', title: 'Thanks'},
            {key: 'libraries', title: 'Libraries'}
        ]
    }

    render () {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                      information: InformationRoute,
                      changelog: ChangelogRoute,
                      thanks: ThanksRoute,
                      libraries: LibrariesRoute
                })}
                renderTabBar = { props =>
                    <TabBar
                        {...props}
                        scrollEnabled
                        indicatorStyle={{ backgroundColor: 'white' }}
                        style={{ backgroundColor: THEME_COLOR }}
                        tabStyle={{width: 'auto'}}
                    />
                }
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        )
    }

}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: THEME_COLOR
    }
})

export default AboutScreen;
