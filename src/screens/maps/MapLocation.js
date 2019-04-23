import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet, PermissionsAndroid, Platform } from "react-native";
import Dialog, { DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import { connect } from 'react-redux';

import MapView from 'react-native-maps';

import { getPins } from '../../store/actions/index';
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '../../data/Constants';
import { MAP_STYLE } from '../../data/MapStyle';
import Icon from '../../components/Icon';
import AppTextBold from '../../components/texts/AppTextBold';
import AppTextRegular from '../../components/texts/AppTextRegular';

import iconRefresh from '../../images/ic_action_refresh.png';
import iconMarker from '../../images/ic_pin.png';
import iconApproved from '../../images/ic_approved.png';

class MapLocationScreen extends Component {

    state = {
        focusedLocation: {
            latitude: DEFAULT_LATITUDE,
            longitude: DEFAULT_LONGITUDE,
            latitudeDelta: 0.85,
            longitudeDelta: 0.85
        },
        dialog: false
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
            latitude: DEFAULT_LATITUDE,
            longitude: DEFAULT_LONGITUDE
        });
    }

    checkPermissionAndroid() {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(response => {
                if (response) {
                    this.setState({ dialog: false });
                } else {
                    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(result => {
                        if (result === PermissionsAndroid.RESULTS.GRANTED) {
                            this.setState({ dialog: true });
                        } else {
                            this.setState({ dialog: false });
                        }
                    });
                }
            })
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleRefresh: this.actionRefresh });
        this.props.onGetPins();
    }

    render () {
        return (
            <View style={styles.container}>
                <Dialog
                    visible={this.state.dialog}>
                    <DialogContent>
                        <View style={styles.dialogContainer}>
                            <Image style={styles.dialogImage} source={iconApproved} />
                            <AppTextBold>Location Enabled!</AppTextBold>
                        </View>
                    </DialogContent>
                    <DialogFooter>
                        <DialogButton
                            text="OK"
                            bordered
                            onPress={() => {
                              this.setState({ dialog: false });
                            }}
                            key="button-2" />
                    </DialogFooter>
                </Dialog>

                <MapView style={styles.mapContainer}
                    onMapReady={() => {
                        this.checkPermissionAndroid()
                    }}
                    initialRegion={this.state.focusedLocation}
                    customMapStyle={MAP_STYLE}
                    showsUserLocation={Platform.OS === 'android' ? true : false}
                    showsMyLocationButton={Platform.OS === 'android' ? true : false}
                    ref={ref => this.map = ref}>
                    {this.props.pins.map((marker, index) => (
                        <MapView.Marker
                            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                            icon={iconMarker}
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
    },
    dialogContainer: {
        alignItems: 'center',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16
    },
    dialogImage: {
        marginBottom: 8,
        width: 100,
        height: 100
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
