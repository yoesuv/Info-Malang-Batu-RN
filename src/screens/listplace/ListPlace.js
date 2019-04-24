import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, RefreshControl, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import { getListPlace } from '../../store/actions/index';

import ItemPlace from '../../components/ItemPlace';
import ViewError from '../../components/views/ViewError';

import { THEME_COLOR } from '../../data/Colors';

class ListPlaceScreen extends Component {

    componentDidMount() {
        this.props.onGetListPlace();
    }

    selectedDataHandler = index => {
        const selectedPlace = this.props.places[index];
        this.props.navigation.navigate('DetailsList', {selectedPlace});
    }

    render () {

        const contentError = (
            <ViewError
                onPress={this.props.onGetListPlace}/>
        );

        let content = (<FlatList
            data={this.props.places}
            renderItem={
                ({item, index}) => (
                    <ItemPlace
                        name={item.nama}
                        location={item.lokasi}
                        image={item.gambar}
                        onItemPressed={() => this.selectedDataHandler(index)}/>
                )
            }
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
                <RefreshControl
                    colors={[THEME_COLOR]}
                    refreshing={this.props.isLoading}
                    onRefresh={this.props.onGetListPlace}/>
            }
        />);

        if (this.props.isLoading) {
            content = (<ActivityIndicator size="large"/>);
        }

        return (
            <View style={styles.container}>
                { this.props.isNetworkError ? contentError : content }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'stretch'
    }
});

const mapStateToProps = state => {
    return {
        places: state.dataConfigure.places,
        isLoading: state.uiConfigure.isLoading,
        isNetworkError: state.uiConfigure.isNetworkError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetListPlace: () => dispatch(getListPlace())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPlaceScreen);
