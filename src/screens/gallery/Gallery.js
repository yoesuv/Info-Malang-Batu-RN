import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import { getGallery } from '../../store/actions/index';

import ItemGallery from '../../components/ItemGallery';

class GalleryScreen extends React.Component {

    componentDidMount() {
        this.props.onGetGallery();
    }

    render () {
        return (
            <View>
            <FlatList
                data={this.props.galleries}
                renderItem={
                    ({item}) => (
                        <ItemGallery
                            image={item.thumbnail}/>
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
