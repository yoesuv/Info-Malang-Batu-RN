import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ItemChangelog from '../../components/ItemChangelog';

class ChangelogScreen extends Component {

    state = {
        changelogs: [{
            versionName: 'Version 1.0.1',
            versionInfo: '• improve performance\n• update libraries'
        },{
            versionName: 'Version 1.0.0',
            versionInfo: '• initial release'
        }]
    }

    render () {
        return (
            <View>
            <FlatList
                style={styles.containerFlatList}
                data={this.state.changelogs}
                renderItem={
                    ({item, index}) => (
                        <ItemChangelog
                            versionName={item.versionName}
                            versionInfo={item.versionInfo}/>
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

export default ChangelogScreen;
