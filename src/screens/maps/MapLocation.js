import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import MapView from 'react-native-maps';

import { getPins } from '../../store/actions/index';

class MapLocationScreen extends React.Component {

    componentDidMount() {
        this.props.onGetPins();
    }

    render () {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapContainer}
                    initialRegion={{
                      latitude: -7.982914,
                      longitude: 112.630875,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    mapContainer: {
        width: "100%",
        height: "100%"
    }
});

const mapStateToProps = state => {
    return {
        pins: state.dataConfigure.pins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPins: () => dispatch(getPins())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapLocationScreen);
