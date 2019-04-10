import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class DetailListPlaceScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            place: this.props.navigation.state.params.selectedPlace
        }
    }

    render () {
        return (
            <View>
                <Image source={{uri:this.state.place.gambar}} style={styles.containerImage} />
                <Text style={styles.textName}>{this.state.place.nama}</Text>
                <Text style={styles.textDescription}>{this.state.place.deskripsi}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerImage: {
        width: "100%",
        height: 250
    },
    textName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
    },
    textDescription: {
        fontSize: 16,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
    }
});

export default DetailListPlaceScreen;
