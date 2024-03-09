import { useState } from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { THEME_COLOR, THEME_COLOR_200 } from "../data/colors";
import FragmentAbout from "./fragment-about";
import FragmentGallery from "./fragment-gallery";

import FragmentListPlace from "./fragment-list-place";
import FragmentMaps from "./fragment-maps";

export default function HomeScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "list", title: "List Place", focusedIcon: "view-list" },
    { key: "gallery", title: "Gallery", focusedIcon: "image-multiple" },
    { key: "maps", title: "Maps", focusedIcon: "map" },
    { key: "about", title: "About", focusedIcon: "information" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    list: FragmentListPlace,
    gallery: FragmentGallery,
    maps: FragmentMaps,
    about: FragmentAbout,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      compact={true}
      barStyle={{ backgroundColor: "white" }}
      activeColor={THEME_COLOR}
      inactiveColor={THEME_COLOR_200}
    />
  );
}
