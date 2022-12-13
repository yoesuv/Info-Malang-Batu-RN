import { StyleSheet, View, FlatList } from "react-native";
import { Divider } from "react-native-paper";
import { ItemChangelog } from "../../components/item-changelog";

import { APP_CHANGELOG } from "../../data/constants";

export default function TabChangelog() {
    return <View style={styles.container}>
        <FlatList
            data={APP_CHANGELOG}
            renderItem={({item, index}) => <ItemChangelog name={item.versionName} info={item.versionInfo} />}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={(item, index) => <Divider />}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});