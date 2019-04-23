import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

import AppTextRegular from '../../components/texts/AppTextRegular';

class DetailGalleryScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            gallery: this.props.navigation.state.params.selectedGallery
        }
    }

    render () {
        return (
            <View>
                <Image source={{uri:this.state.gallery.image}} style={styles.containerImage} />
                <AppTextRegular style={styles.textDescription}>{this.state.gallery.caption}</AppTextRegular>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerImage: {
        width: "100%",
        height: 250
    },
    textDescription: {
        fontSize: 18,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
    }
});

export default DetailGalleryScreen;
