import { useState } from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation, Text } from 'react-native-paper';

import FragmentListPlace from "./fragment-list-place";

const GalleryPage = () => <Text>Gallery</Text>;
const MapsPage = () => <Text>Maps</Text>;
const AboutPage = () => <Text>About Page</Text>;

export default function HomeScreen() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'list', title: 'List Place', focusedIcon: 'view-list'},
        {key: 'gallery', title: 'Gallery', focusedIcon: 'image-multiple'},
        {key: 'maps', title: 'Maps', focusedIcon: 'map'},
        {key: 'about', title: 'About', focusedIcon: 'information'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        list: FragmentListPlace,
        gallery: GalleryPage,
        maps: MapsPage,
        about: AboutPage,
    });

    return <BottomNavigation 
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        compact={true}
    /> 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})