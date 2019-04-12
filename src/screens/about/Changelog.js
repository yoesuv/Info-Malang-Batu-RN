import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import ItemChangelog from '../../components/ItemChangelog';

class ChangelogScreen extends React.Component {

    state = {
        changelogs: [{
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
