import { StyleSheet, View } from 'react-native';
import { Appbar, ActivityIndicator } from 'react-native-paper';
import { FlashList } from "@shopify/flash-list";

import { THEME_COLOR } from '../data/colors';
import UseGallery from '../services/gallery-service';
import { GalleryModel } from '../models/gallery-model';
import ItemGallery from '../components/item-gallery';

export default function FragmentGallery() {

    const { data, status } = UseGallery();

    return <View style={styles.container}>
        <Appbar.Header mode="small" statusBarHeight={0} style={{ backgroundColor: THEME_COLOR }}>
            <Appbar.Content title="Gallery" titleStyle={styles.title} />
        </Appbar.Header>
        { status === 'loading' && <LoadingView /> }
        { status === 'success' && <GalleryView galleries={data} /> }
    </View>
}

const LoadingView = () => {
    return <View style={styles.contentLoading}>
        <ActivityIndicator size={'large'} />
    </View>
}

const GalleryView = ({galleries}: {galleries: GalleryModel[]}) => {
    return <FlashList
        data={galleries}
        renderItem={({item}) => (
            <ItemGallery gallery={item} onItemClick={() => {
                console.log(`Fragment Gallery # ${item.caption}`);
            }}/>
        )}
        keyExtractor = {(_, index) => index.toString()}
        numColumns={3}
        estimatedItemSize={galleries.length}
    />
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})