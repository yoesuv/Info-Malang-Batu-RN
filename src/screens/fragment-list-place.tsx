import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import ItemPlace from "../components/item-place";
import { PlaceModel } from "../models/place-model";
import UseListPlace from "../services/list-place-service";
import { RootStackParamList } from "./root-stack-params";
import AppBarHeader from "../components/app-bar-header";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export default function FragmentListPlace() {
  const { data, isLoading, isSuccess } = UseListPlace();

  return (
    <View style={styles.container}>
      <AppBarHeader title="List Place" />
      {isLoading && <LoadingView />}
      {isSuccess && <ListPlaceView places={data} />}
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

const ListPlaceView = ({ places }: { places: PlaceModel[] }) => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={styles.contentList}>
      <FlashList
        data={places}
        renderItem={({ item }) => (
          <ItemPlace
            place={item}
            onItemClik={() => {
              console.log(`Fragment List Place # item click ${item.nama}`);
              navigation.navigate("DetailPlace", item);
            }}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        estimatedItemSize={places.length}
      />
    </View>
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
  contentList: {
    flex: 1,
  },
});
