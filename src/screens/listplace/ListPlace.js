import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import { getListPlace } from '../../store/actions/index';

class ListPlaceScreen extends React.Component {

    componentDidMount() {
        this.props.onGetListPlace();
    }

    render () {
        return (
            <View>
                <Text>List Place</Text>
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
