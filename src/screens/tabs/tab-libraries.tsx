import { StyleSheet, View, FlatList, Text } from "react-native";
import { Divider } from "react-native-paper";
import ItemLibrary from "../../components/item-library";

import { APP_LIBRARIES } from "../../data/constants";

export default function TabLibraries() {
    return <View style={styles.container}>
        <FlatList
            data={APP_LIBRARIES}
            renderItem={({item, index}) => <ItemLibrary name={item.name} link={item.link} license={item.license} /> }
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