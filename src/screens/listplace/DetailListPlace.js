import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
                <Text>Detail List Place {this.state.place.nama}</Text>
            </View>
        )
    }

}

export default DetailListPlaceScreen;
