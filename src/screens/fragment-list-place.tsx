import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import { Text, ActivityIndicator, Appbar } from 'react-native-paper';
import ItemPlace from "../components/item-place";
import { THEME_COLOR } from "../data/colors";
import { PlaceModel } from "../models/place-model";

import UseListPlace from "../services/list-place-service";

export default function FragmentListPlace() {

    const { data, status } = UseListPlace(); 

    return <View style={styles.container}>
        <Appbar.Header mode="small" style={{ backgroundColor: THEME_COLOR }}>
            <Appbar.Content title="List Place" titleStyle={styles.title} />
        </Appbar.Header>
        { status === 'loading' && <LoadingView /> }
        { status === 'success' && <ListPlaceView places={data} /> }
    </View>
}

const LoadingView = () => {
    return <View style={styles.contentLoading}>
        <ActivityIndicator size={'large'} />
    </View>
}

const ListPlaceView = ({places}: {places: PlaceModel[]}) => {
    return <View style={styles.contentList}>
        <FlashList 
            data={places}
            renderItem={({item}) => (
                <ItemPlace place={item} />
            )}
            keyExtractor = {(_, index) => index.toString()}
            estimatedItemSize={places.length}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    contentLoading: {
        flex: 1,
        justifyContent: 'center',
    },
    contentList: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});