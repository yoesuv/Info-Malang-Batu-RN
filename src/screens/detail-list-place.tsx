import { StyleSheet, View } from 'react-native';
import { Text, Appbar } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { THEME_COLOR } from '../data/colors';
import { RootStackParamList } from './root-stack-params';

type detailPlaceScreenProp = StackNavigationProp<RootStackParamList, 'DetailPlace'>;

export default function DetailListPlaceScreen() {

    const navigation = useNavigation<detailPlaceScreenProp>();

    const pressBack = () => {
        navigation.pop();
    }

    return <SafeAreaView style={styles.container}>
        <Appbar.Header mode="small" statusBarHeight={0} style={{ backgroundColor: THEME_COLOR }}>
            <Appbar.BackAction color='white' onPress={pressBack} />
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