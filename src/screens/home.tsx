import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
    return <SafeAreaView style={styles.container}>
        <Text>Home Sceen</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})