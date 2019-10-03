import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ItemChangelog from '../../components/ItemChangelog';

class ChangelogScreen extends Component {

    state = {
        changelogs: [{
            versionName: 'Version 1.0.3',
            versionInfo: '• update libraries\n• support android 10'
        },{
            versionName: 'Version 1.0.2',
            versionInfo: '• swipe refresh list place\n• swipe refresh gallery\n• add ui network error'
        },{
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
