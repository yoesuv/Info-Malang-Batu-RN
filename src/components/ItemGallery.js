import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const itemGallery = (props) => {
    const customHeight = Dimensions.get('window').width/3;
    return <TouchableOpacity onPress={props.onItemPressed} style={styles.container}>
                <View>
                    <Image source={{ uri: props.image }} style={{...styles.thumbnail, ...{height: customHeight} }}/>
                </View>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    thumbnail: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default itemGallery;
