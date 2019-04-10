import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import { getGallery } from '../../store/actions/index';

import ItemGallery from '../../components/ItemGallery';

class GalleryScreen extends React.Component {

    componentDidMount() {
        this.props.onGetGallery();
    }

    selectedDataHandler = index => {
        const selectedGallery = this.props.galleries[index];
        this.props.navigation.navigate('DetailGallery', {selectedGallery});
    }

    render () {
        return (
            <View>
            <FlatList
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
            />
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {
        galleries: state.dataConfigure.galleries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetGallery: () => dispatch(getGallery())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (GalleryScreen);
