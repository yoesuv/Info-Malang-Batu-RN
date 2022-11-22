import { StyleSheet, View, Text } from "react-native";

export default function SplashScreen() {
    return <View style={styles.container}>
        <Text style={styles.textSplash}>Info Malang Batu</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSplash: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black'
      }
});