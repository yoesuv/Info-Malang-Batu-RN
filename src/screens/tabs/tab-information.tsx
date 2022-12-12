import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-paper';

import SizedBox from "../../components/sized-box";

export default function TabInformation() {

    return <View style={styles.container}>
        <SizedBox height={10} />
        <Text style={styles.title}>Info Malang Batu</Text>
        <SizedBox height={5} />
        <Text style={styles.content}>React Native Version</Text>
        <Text style={styles.content}>2.0.0</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    content: {
        color: 'black',
        fontSize: 16,
    },
})