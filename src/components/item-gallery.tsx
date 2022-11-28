import { StyleSheet, Dimensions, View, Image } from 'react-native';
import { Text, TouchableRipple } from "react-native-paper";

import { GalleryModel } from "../models/gallery-model";

interface TIPGallery {
    gallery: GalleryModel;
    onItemClick: () => void;
}

export default function ItemGallery({gallery, onItemClick}: TIPGallery) {
    const customHeight = Dimensions.get('window').width/3;
    return <TouchableRipple onPress={onItemClick}>
        <View style={{ ...styles.content, width: customHeight, height: customHeight }}>
            <View style={{...styles.container, height: customHeight, width: customHeight}} />
            <Image source={{ uri: gallery.thumbnail }}  style={{height: customHeight, width: customHeight }} />
        </View>
    </TouchableRipple>
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        borderColor: 'white',
        borderWidth: 1,
        position: 'absolute',
    },
    image: {
        position: 'absolute',
    }
});