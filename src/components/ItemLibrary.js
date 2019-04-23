import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppTextBold from './texts/AppTextBold';
import AppTextRegular from './texts/AppTextRegular';
import AppTextConsola from './texts/AppTextConsola';

import { THEME_COLOR } from '../data/Colors';

const itemLibrary = (props) => {
    return <View style={styles.container}>
            <AppTextBold style={styles.textName}>{ props.name }</AppTextBold>
            <AppTextRegular style={styles.textLink}>{ props.link }</AppTextRegular>
            <AppTextConsola style={styles.textLicense}>{ props.license }</AppTextConsola>
        </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 16
    },
    textName: {
        fontSize: 18
    },
    textLink: {
        color: THEME_COLOR
    },
    textLicense: {
        fontSize: 12
    }
});

export default itemLibrary;
