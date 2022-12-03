import { StyleSheet, View, FlatList, Text } from "react-native";

import { APP_CHANGELOG } from "../../data/constants";

export default function TabChangelog() {
    return <View style={styles.container}>
        <FlatList
            data={APP_CHANGELOG}
            renderItem={({item, index}) => <Text>{item.versionName}</Text>}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});