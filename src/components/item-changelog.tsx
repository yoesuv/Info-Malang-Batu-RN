import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface TIChangelog {
  name: string;
  info: string;
}

export function ItemChangelog({ name, info }: TIChangelog) {
  return (
    <View style={styles.container}>
      <Text style={styles.versionName}>{name}</Text>
      <Text style={styles.versionInfo}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  versionName: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "black",
    includeFontPadding: false,
  },
  versionInfo: {
    fontSize: 14,
    color: "#424242",
    includeFontPadding: false,
  },
});
