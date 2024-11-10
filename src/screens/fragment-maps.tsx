import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useAssets } from "expo-asset";

import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from "../data/constants";
import { MAP_STYLE } from "../data/maps-style";
import UsePins from "../services/pin-service";
import { PinModel } from "../models/pin-model";
import AppBarHeader from "../components/app-bar-header";

interface TIDataPins {
  pins: PinModel[];
}

export default function FragmentMaps() {
  const { data, isLoading, isSuccess } = UsePins();

  return (
    <View style={styles.container}>
      <AppBarHeader title="Maps" />
      {isLoading && <LoadingView />}
      {isSuccess && <MapsPinView pins={data} />}
    </View>
  );
}

const LoadingView = () => {
  return (
    <View style={styles.contentLoading}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

const MapsPinView = ({ pins }: TIDataPins) => {
  const [iconMarker, iconMarkerError] = useAssets([
    require("../images/ic_pin.png"),
    require("../images/ic_pin.png"),
  ]);
  const markers = iconMarker ? iconMarker : null;
  const marker = markers ? markers[0] : null;
  const markerUri = marker?.uri;

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: DEFAULT_LATITUDE,
        longitude: DEFAULT_LONGITUDE,
        latitudeDelta: 0.85,
        longitudeDelta: 0.85,
      }}
      customMapStyle={MAP_STYLE}
    >
      {pins.map((pin, index) => (
        <Marker
          coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
          image={{ uri: markerUri }}
          title={pin.name}
          key={index}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  contentLoading: {
    flex: 1,
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
