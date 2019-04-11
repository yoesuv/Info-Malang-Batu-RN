import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MapView from 'react-native-maps';

class MapLocationScreen extends React.Component {

    render () {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapContainer}
                    initialRegion={{
                      latitude: -7.982914,
                      longitude: 112.630875,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    mapContainer: {
        width: "100%",
        height: "100%"
    }
});

export default MapLocationScreen;
