import { StyleSheet, View } from 'react-native';
import { Text, Appbar } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

import { THEME_COLOR } from '../data/colors';

export default function DetailListPlaceScreen() {
    return <SafeAreaView style={styles.container}>
        <Appbar.Header mode="small" style={{ backgroundColor: THEME_COLOR }}>
            <Appbar.Content title="Detail Place" titleStyle={styles.title} />
        </Appbar.Header>
        <Text style={{ fontSize: 20 }}>Detail Place</Text>
    </SafeAreaView>
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
    }
})