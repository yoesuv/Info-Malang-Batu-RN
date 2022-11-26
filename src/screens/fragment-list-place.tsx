import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import { Text, ActivityIndicator, Appbar } from 'react-native-paper';
import { THEME_COLOR } from "../data/colors";
import { PlaceModel } from "../models/place-model";

import UseListPlace from "../services/list-place-service";

export default function FragmentListPlace() {

    const { data, status } = UseListPlace(); 

    return <View style={styles.container}>
        <Appbar.Header mode="small" style={{ backgroundColor: THEME_COLOR }}>
            <Appbar.Content title="List Place" />
        </Appbar.Header>
        { status === 'loading' && <LoadingView /> }
        { status === 'success' && <Text>SHOW DATA</Text>}
    </View>
}

const LoadingView = () => {
    return <View style={styles.contentLoading}>
        <ActivityIndicator size={'large'} />
    </View>
}

const ListPlaceView = (places?: PlaceModel[]) => {
    return <View>
        <FlashList 
            data={places}
            renderItem={({item}) => (
                <Text>{item.nama}</Text>
            )}
            keyExtractor = {(_, index) => index.toString()}
            estimatedItemSize={places?.length ? places?.length : 0}
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
});