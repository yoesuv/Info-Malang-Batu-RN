import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

import AppTextBold from './AppTextBold';
import AppTextRegular from './AppTextRegular';

const itemPlace = (props) => {
        console.log(props)
        return <TouchableOpacity onPress={props.onItemPressed}>
                    <View style={styles.container}>
                        <ImageBackground source={{ uri: props.image }} style={styles.image}>
                            <View style={styles.textContainer}>
                                <AppTextBold style={styles.title}>{ props.name }</AppTextBold>
                                <AppTextRegular style={styles.location}>{ props.location }</AppTextRegular>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
};

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: 170
    },
    textContainer: {
        marginLeft: 8,
        marginBottom: 8,
        position: 'absolute',
        bottom:0
    },
    image:{
        width: "100%",
        height: "100%"
    },
    title: {
        fontSize: 21,
        color: '#FFFFFF',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        textShadowColor: '#212121'
    },
    location: {
        fontSize: 18,
        color: '#FFFFFF',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        textShadowColor: '#212121'
    }
});

export default itemPlace;
