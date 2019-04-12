import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import ItemLibraries from '../../components/ItemLibrary';

import { LICENSE_REACT_NAVIGATION } from '../../data/Constants';

class LibrariesScreen extends React.Component {

    state = {
        libs: [{
                name: 'React Native',
                link: 'https://facebook.github.io/react-native/',
                license: 'license'
            },
            {
                name: 'React Navigation',
                link: 'https://reactnavigation.org/',
                license: LICENSE_REACT_NAVIGATION
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
