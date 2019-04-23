import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, RefreshControl, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import { getGallery } from '../../store/actions/index';

import ItemGallery from '../../components/ItemGallery';

class GalleryScreen extends Component {

    componentDidMount() {
        this.props.onGetGallery();
    }

    selectedDataHandler = index => {
        const selectedGallery = this.props.galleries[index];
        this.props.navigation.navigate('DetailGallery', {selectedGallery});
    }

    render () {

        let content = (<FlatList
            data={this.props.galleries}
            renderItem={
                ({item, index}) => (
                    <ItemGallery
                        image={item.thumbnail}
                        onItemPressed={() => this.selectedDataHandler(index)}/>
                )
            }
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
                <RefreshControl
                    colors={["#779ECB"]}
                    refreshing={this.props.isLoading}
                    onRefresh={this.props.onGetGallery}/>
            }
        />);

        if (this.props.isLoading) {
            content = (<ActivityIndicator size="large"/>);
        }

        return (
            <View style={styles.container}>
                { content }
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
        galleries: state.dataConfigure.galleries,
        isLoading: state.uiConfigureGallery.isLoadingGallery
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetGallery: () => dispatch(getGallery())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (GalleryScreen);
