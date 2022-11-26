import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { PlaceModel } from "../models/place-model";

interface TIPlace {
    place: PlaceModel
}

export default function ItemPlace({place}: TIPlace) {
    return <Text>{place.nama}</Text>
}

const styles = StyleSheet.create({

});