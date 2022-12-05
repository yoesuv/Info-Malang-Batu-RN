import { StyleSheet, View, FlatList, Text } from "react-native";
import { Divider } from "react-native-paper";

import { APP_LIBRARIES } from "../../data/constants";

export default function TabLibraries() {
    return <View style={styles.container}>
        <FlatList
            data={APP_LIBRARIES}
            renderItem={({item, index}) => <Text>{ item }</Text>} 
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