import { StyleSheet, View } from "react-native";
import { Appbar } from 'react-native-paper';

import { THEME_COLOR } from "../data/colors";

export default function FragmentMaps() {
    return <View style={styles.container}>
        <Appbar.Header mode="small" statusBarHeight={0} style={{ backgroundColor: THEME_COLOR }} >
            <Appbar.Content title="Maps" titleStyle={styles.title} />
        </Appbar.Header>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})