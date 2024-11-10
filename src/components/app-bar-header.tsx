import { Appbar } from "react-native-paper";
import { THEME_COLOR } from "../data/colors";
import { StyleSheet } from "react-native";

interface TIAppBarHeader {
  title: string;
  pressBack?: () => void;
}

export default function AppBarHeader({ title, pressBack }: TIAppBarHeader) {
  return (
    <Appbar.Header
      mode="small"
      statusBarHeight={0}
      style={{ backgroundColor: THEME_COLOR }}
    >
      {pressBack !== undefined && (
        <Appbar.BackAction color="white" onPress={pressBack} />
      )}
      <Appbar.Content title={title} titleStyle={styles.title} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "Pacifico",
    color: "white",
  },
});
