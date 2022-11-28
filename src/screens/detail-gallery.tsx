import { StyleSheet, View, Image } from 'react-native';
import { Text, Appbar } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { THEME_COLOR } from '../data/colors';
import { RootStackParamList } from './root-stack-params';

type detailGalleryScreenProp = StackNavigationProp<RootStackParamList, 'DetailGallery'>;

export default function DetailGalleryScreen() {

    const navigation = useNavigation<detailGalleryScreenProp>();

    const pressBack = () => {
        navigation.pop();
    }

    return <SafeAreaView style={styles.container}>
        <Appbar.Header mode="small" statusBarHeight={0} style={{ backgroundColor: THEME_COLOR }}>
            <Appbar.BackAction color='white' onPress={pressBack} />
            <Appbar.Content title="Detail Gallery" titleStyle={styles.title} />
        </Appbar.Header>
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
    },
})