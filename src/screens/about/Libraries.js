import React,{ Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ItemLibraries from '../../components/ItemLibrary';

import { LICENSE_REACT_NATIVE, LICENSE_REACT_NAVIGATION, LICENSE_REACT_REDUX, LICENSE_REACT_NATIVE_MAPS, LICENSE_REACT_NATIVE_POPUP_DIALOG, LICENSE_REACT_NAVIGATION_STACK } from '../../data/Constants';

class LibrariesScreen extends Component {

    state = {
        libs: [{
                name: 'React Native',
                link: 'https://facebook.github.io/react-native/',
                license: LICENSE_REACT_NATIVE
            },
            {
                name: 'React Navigation',
                link: 'https://reactnavigation.org/',
                license: LICENSE_REACT_NAVIGATION
            },
            {
                name: 'React Navigation Stack',
                link: 'https://github.com/react-navigation/stack',
                license: LICENSE_REACT_NAVIGATION_STACK
            },
            {
                name: 'React Navigation Tabs',
                link: 'https://github.com/react-navigation/tabs',
                license: LICENSE_REACT_NAVIGATION_STACK
            },
            {
                name: 'React Redux',
                link: 'https://react-redux.js.org/',
                license: LICENSE_REACT_REDUX
            },
            {
                name: 'Redux Thunk',
                link: 'https://github.com/reduxjs/redux-thunk',
                license: LICENSE_REACT_REDUX
            },
            {
                name: 'React Native Maps',
                link: 'https://github.com/react-native-community/react-native-maps',
                license: LICENSE_REACT_NATIVE_MAPS
            },
            {
                name: 'React Native Popup Dialog',
                link: 'https://github.com/jacklam718/react-native-popup-dialog',
                license: LICENSE_REACT_NATIVE_POPUP_DIALOG
            },
            {
                name: 'React Native Tab View',
                link: 'https://github.com/react-native-community/react-native-tab-view',
                license: LICENSE_REACT_NAVIGATION_STACK
            }]
    }

    render () {

        let content = (<FlatList
            style={styles.containerFlatList}
            data={this.state.libs}
            renderItem={
                ({item, index}) => (
                    <ItemLibraries
                        name={item.name}
                        link={item.link}
                        license={item.license}/>
                )
            }
            keyExtractor={(item, index) => index.toString()}
        />);

        return (
            <View>
                { content }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerFlatList: {
        paddingLeft: 16,
        paddingRight: 16
    }
});

export default LibrariesScreen;
