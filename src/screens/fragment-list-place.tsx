import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import ItemPlace from "../components/item-place";
import { PlaceModel } from "../models/place-model";
import UseListPlace from "../services/list-place-service";
import { RootStackParamList } from "./root-stack-params";
import AppBarHeader from "../components/app-bar-header";
import { THEME_COLOR } from "../data/colors";

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export default function FragmentListPlace() {
  const { data, isLoading, isSuccess } = UseListPlace();

  return (
    <SafeAreaView style={styles.containerSafeArea} edges={["top"]}>
      <View style={styles.container}>
        <AppBarHeader title="List Place" />
        {isLoading && <LoadingView />}
        {isSuccess && <ListPlaceView places={data} />}
      </View>
    </SafeAreaView>
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
  containerSafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
  container: {
    flex: 1,
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
