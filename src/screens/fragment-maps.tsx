import { StyleSheet, View } from "react-native";
import { Appbar } from 'react-native-paper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { THEME_COLOR } from "../data/colors";
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from "../data/constants";
import { MAP_STYLE } from "../data/maps-style";

export default function FragmentMaps() {
    return <View style={styles.container}>
        <Appbar.Header mode="small" statusBarHeight={0} style={{ backgroundColor: THEME_COLOR }} >
            <Appbar.Content title="Maps" titleStyle={styles.title} />
        </Appbar.Header>
        <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: DEFAULT_LATITUDE,
                longitude: DEFAULT_LONGITUDE,
                latitudeDelta: 0.85,
                longitudeDelta: 0.85,
            }}
            customMapStyle={MAP_STYLE}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    map: {
        width: '100%',
        height: '100%',
    },
})