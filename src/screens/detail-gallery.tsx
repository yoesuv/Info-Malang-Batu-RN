import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "./root-stack-params";
import AppBarHeader from "../components/app-bar-header";
import { THEME_COLOR } from "../data/colors";

type detailGalleryScreenProp = StackNavigationProp<
  RootStackParamList,
  "DetailGallery"
>;

export default function DetailGalleryScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "DetailGallery">>();
  const params = route.params;
  const navigation = useNavigation<detailGalleryScreenProp>();

  const pressBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.containerSafeArea} edges={["top"]}>
      <View style={styles.container}>
        <AppBarHeader title="Detail Gallery" pressBack={pressBack} />
        <View style={styles.containerImage}>
          <Image source={{ uri: params.image }} style={styles.containerImage} />
        </View>
        <Text style={styles.textDescription}>{params.caption}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  containerImage: {
    width: "100%",
    height: 250,
    backgroundColor: "#EEEEEE",
  },
  textDescription: {
    fontSize: 16,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    includeFontPadding: false,
  },
});
