import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import AppTextRegular from '../../components/texts/AppTextRegular';

class ThanksScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <AppTextRegular style={styles.textThanks}>terima kasih kepada blog-blog maupun perorangan yang fotonya dimuat dalam aplikasi ini,
                dan tidak bisa disebutkan satu persatu (kalian luar biasa...)</AppTextRegular>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16
    },
    textThanks: {
        fontSize: 15
    }
});

export default ThanksScreen;
