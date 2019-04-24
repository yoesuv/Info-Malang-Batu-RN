import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppTextBold from '../texts/AppTextBold';
import AppTextRegular from '../texts/AppTextRegular';

import IconNetworkError from '../../images/ic_network_error.png';

class ViewError extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Image source={IconNetworkError}>
                <AppTextBold>Oops..</AppTextBold>
                <AppTextRegular>Check Your Internet Connection</AppTextRegular>
            </View>
            );
        };
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
});

export default ViewError;
