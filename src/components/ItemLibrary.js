import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppTextBold from './AppTextBold';
import AppTextRegular from './AppTextRegular';
import AppTextConsola from './AppTextConsola';

import { THEME_COLOR } from '../data/Constants';

const itemLibrary = (props) => {
    return <View style={styles.container}>
            <AppTextBold style={styles.textName}>{ props.name }</AppTextBold>
            <AppTextRegular style={styles.textLink}>{ props.link }</AppTextRegular>
            <AppTextConsola>{ props.license }</AppTextConsola>
        </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    textName: {
        fontSize: 18
    },
    textLink: {
        color: THEME_COLOR
    }
});

export default itemLibrary;
