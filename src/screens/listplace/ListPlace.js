import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import { getListPlace } from '../../store/actions/index';

import ItemPlace from '../../components/ItemPlace';

class ListPlaceScreen extends React.Component {

    componentDidMount() {
        this.props.onGetListPlace();
    }

    render () {
        return (
            <View>
            <FlatList
                data={this.props.places}
                renderItem={
                    ({item}) => (
                        <ItemPlace
                            name={item.nama}
                            location={item.lokasi}
                            image={item.gambar}/>
                    )
                }
                keyExtractor={(item, index) => index.toString()}
            />
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {
        places: state.dataConfigure.places
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetListPlace: () => dispatch(getListPlace())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPlaceScreen);
