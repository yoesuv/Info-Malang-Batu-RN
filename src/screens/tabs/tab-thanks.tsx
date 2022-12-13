import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-paper';

export default function TabThanks() {
    return <View style={styles.container}>
        <Text style={styles.content}>terima kasih kepada blog-blog maupun perorangan yang fotonya dimuat dalam aplikasi ini, dan tidak bisa disebutkan satu persatu (kalian luar biasa...)</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    content: {
        fontSize: 14,
        color: 'black',
    },
});