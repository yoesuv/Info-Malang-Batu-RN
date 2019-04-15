import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppTextBold from './AppTextBold';
import AppTextRegular from './AppTextRegular';

const itemChangelog = (props) => {
    return <View style={styles.container}>
            <AppTextBold style={styles.textVersionName}>{ props.versionName }</AppTextBold>
            <AppTextRegular>{ props.versionInfo }</AppTextRegular>
        </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 16
    },
    textVersionName: {
        fontSize: 16
    }
});

export default itemChangelog;
