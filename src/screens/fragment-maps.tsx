import { StyleSheet, View } from "react-native";
import { Appbar, ActivityIndicator } from 'react-native-paper';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Asset, useAssets } from 'expo-asset';

import { THEME_COLOR } from "../data/colors";
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from "../data/constants";
import { MAP_STYLE } from "../data/maps-style";
import UsePins from "../services/pin-service";

export default function FragmentMaps() {

    const { data, status } = UsePins();

    return <View style={styles.container}>
        <Appbar.Header mode="small" statusBarHeight={0} style={{ backgroundColor: THEME_COLOR }} >
            <Appbar.Content title="Maps" titleStyle={styles.title} />
        </Appbar.Header>
        { status === 'loading' && <LoadingView /> }
        { status === 'success' && <MapsPinView/> }
    </View>
}

const LoadingView = () => {
    return <View style={styles.contentLoading}>
        <ActivityIndicator size={'large'} />
    </View>
}

const MapsPinView = () => {
    
    const [ iconMarker, iconMarkerError ] = useAssets([require('../images/ic_pin.png'), require('../images/ic_pin.png')]);
    const markers = iconMarker ? iconMarker : null;
    const marker = markers ? markers[0] : null;
    const markerUri = marker?.uri

    return <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
            latitude: DEFAULT_LATITUDE,
            longitude: DEFAULT_LONGITUDE,
            latitudeDelta: 0.85,
            longitudeDelta: 0.85,
        }}
        customMapStyle={MAP_STYLE}>
            <Marker
            coordinate={{latitude: DEFAULT_LATITUDE, longitude: DEFAULT_LONGITUDE}}
            image={{ uri: markerUri}}
            />
        </MapView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    contentLoading: {
        flex: 1,
        justifyContent: 'center',
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