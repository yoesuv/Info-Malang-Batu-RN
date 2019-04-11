import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from 'react-redux';

import MapView from 'react-native-maps';

import { getPins } from '../../store/actions/index';

import Icon from '../../components/Icon';

import iconRefresh from '../../images/ic_action_refresh.png';

class MapLocationScreen extends React.Component {

    state = {
        focusedLocation: {
            latitude: -7.982914,
            longitude: 112.630875,
            latitudeDelta: 0.85,
            longitudeDelta: 0.85
        }
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            headerRight: (
                <TouchableOpacity onPress={() => params.handleRefresh()}>
                    <Image source={iconRefresh} style={{ width:24, height:24, marginRight: 16 }}/>
                </TouchableOpacity>
            )
        }
    };

    actionRefresh = () => {
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: -7.982914,
            longitude: 112.630875
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleRefresh: this.actionRefresh });
        this.props.onGetPins();
    }

    render () {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapContainer}
                    initialRegion={this.state.focusedLocation}
                    ref={ref => this.map = ref} >
                    {this.props.pins.map((marker, index) => (
                        <MapView.Marker
                            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                            title={marker.name}
                            key={index}
                        />
                    ))}
                </MapView>
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
