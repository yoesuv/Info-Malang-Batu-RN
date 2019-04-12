import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AppTextBold = (props) => {
    return <Text style={[styles.text, props.style]}>{ props.children }</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "MyriadPro-Bold",
    }
});

export default AppTextBold;
