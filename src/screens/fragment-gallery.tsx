import { StyleSheet, View } from 'react-native';
import { Text, Appbar } from 'react-native-paper';
import { THEME_COLOR } from '../data/colors';

export default function FragmentGallery() {
    return <View style={styles.container}>
        <Appbar.Header mode="small" statusBarHeight={0} style={{ backgroundColor: THEME_COLOR }}>
            <Appbar.Content title="Gallery" titleStyle={styles.title} />
        </Appbar.Header>
        <Text style={{ fontSize: 20 }}>Gallery</Text>
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
    }
})