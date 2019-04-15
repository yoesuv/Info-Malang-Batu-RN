import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Icon = (props) => {
    return <View>
        <Image source={ props.image } style={styles.icon}/>
    </View>
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
});

export default Icon;
