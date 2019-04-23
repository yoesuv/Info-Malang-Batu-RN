import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppTextBold from './texts/AppTextBold';
import AppTextRegular from './texts/AppTextRegular';

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
