import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { PlaceModel } from "../models/place-model";

interface TIPlace {
    place: PlaceModel
}

export default function ItemPlace({place}: TIPlace) {
    return <View style={styles.container}>
        <Image source={{ uri: place.gambar }} style={styles.image}/>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{place.nama}</Text>
            <Text style={styles.location}>{place.lokasi}</Text>
        </View>
    </View> 
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 170,
        backgroundColor: '#EEEEEE',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    image:{
        width: "100%",
        height: 170,
    },
    textContainer: {
        marginLeft: 8,
        marginBottom: 8,
        position: 'absolute',
        bottom:0,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        textShadowColor: '#212121'
    },
    location: {
        fontSize: 16,
        color: '#FFFFFF',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        textShadowColor: '#212121'
    },
});