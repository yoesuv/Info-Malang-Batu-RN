import { StyleSheet, View, Image } from "react-native";
import { Text, Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

import { THEME_COLOR } from "../data/colors";
import { RootStackParamList } from "./root-stack-params";

type detailPlaceScreenProp = StackNavigationProp<
  RootStackParamList,
  "DetailPlace"
>;

export default function DetailListPlaceScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "DetailPlace">>();
  const params = route.params;
  const navigation = useNavigation<detailPlaceScreenProp>();

  const pressBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header
        mode="small"
        statusBarHeight={0}
        style={{ backgroundColor: THEME_COLOR }}
      >
        <Appbar.BackAction color="white" onPress={pressBack} />
        <Appbar.Content title="Detail Place" titleStyle={styles.title} />
      </Appbar.Header>
      <View style={styles.containerImage}>
        <Image source={{ uri: params.gambar }} style={styles.containerImage} />
      </View>
      <Text style={styles.textName}>{params.nama}</Text>
      <Text style={styles.textDescription}>{params.deskripsi}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  title: {
    fontSize: 20,
    fontFamily: "Pacifico",
    color: "white",
  },
  textName: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  textDescription: {
    fontSize: 16,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
});
