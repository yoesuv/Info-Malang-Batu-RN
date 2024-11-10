import { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Appbar } from "react-native-paper";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import { THEME_COLOR } from "../data/colors";
import TabChangelog from "./tabs/tab-changelog";
import TabInformation from "./tabs/tab-information";
import TabLibraries from "./tabs/tab-libraries";
import TabThanks from "./tabs/tab-thanks";

export default function FragmentAbout() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "info", title: "Information" },
    { key: "changelog", title: "Changelog" },
    { key: "thanks", title: "Thanks" },
    { key: "libraries", title: "Libraries" },
  ]);

  const renderScene = SceneMap({
    info: TabInformation,
    changelog: TabChangelog,
    thanks: TabThanks,
    libraries: TabLibraries,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled={true}
      indicatorStyle={{ backgroundColor: "white", height: 4 }}
      style={{ backgroundColor: THEME_COLOR }}
      tabStyle={{ width: "auto" }}
      labelStyle={{ fontSize: 16, textTransform: "none" }}
    />
  );

  return (
    <View style={styles.container}>
      <Appbar.Header
        mode="small"
        statusBarHeight={0}
        style={{ backgroundColor: THEME_COLOR }}
      >
        <Appbar.Content title="About" titleStyle={styles.title} />
      </Appbar.Header>
      <TabView
        initialLayout={{ width: Dimensions.get("window").width }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontFamily: "Pacifico",
    color: "white",
  },
});
