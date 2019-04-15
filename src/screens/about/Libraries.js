import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import ItemLibraries from '../../components/ItemLibrary';

import { LICENSE_REACT_NATIVE, LICENSE_REACT_NAVIGATION, LICENSE_REACT_REDUX, LICENSE_REACT_NATIVE_MAPS, LICENSE_REACT_NATIVE_POPUP_DIALOG } from '../../data/Constants';

class LibrariesScreen extends React.Component {

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
                name: 'React Native ViewPager',
                link: 'https://github.com/zbtang/React-Native-ViewPager',
                license: '\n'
            }]
    }

    render () {
        return (
            <View>
                <FlatList
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
                />
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
