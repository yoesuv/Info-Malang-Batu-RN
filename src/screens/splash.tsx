import { StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "./root-stack-params";

type splashScreenProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export default function SplashScreen() {

    const navigation = useNavigation<splashScreenProp>();

    setTimeout(() => {
        navigation.navigate('Home');
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }]
          });
      }, 2000)

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