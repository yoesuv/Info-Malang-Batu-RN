import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "./root-stack-params";
import { THEME_COLOR } from "../data/colors";

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
        backgroundColor: THEME_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSplash: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
    },
});