import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const itemPlace = (props) => {
        console.log(props)
        return <View style={styles.container}>
                    <ImageBackground source={{ uri: props.image }} style={styles.image}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{ props.name }</Text>
                            <Text style={styles.location}>{ props.location }</Text>
                        </View>
                    </ImageBackground>
                </View>
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
        fontSize: 20,
        fontWeight: 'bold',
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
