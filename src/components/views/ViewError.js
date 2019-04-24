import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppTextBold from '../texts/AppTextBold';
import AppTextRegular from '../texts/AppTextRegular';
import DefaultButton from '../buttons/DefaultButton';

import IconNetworkError from '../../images/ic_network_error.png';

class ViewError extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Image source={IconNetworkError}/>
                <AppTextBold>Oops..</AppTextBold>
                <AppTextRegular>Check Your Internet Connection</AppTextRegular>
                <View style={styles.containerButton}>
                    <DefaultButton
                        title="Try Again"
                        onPress={this.props.onPress}/>
                </View>
            </View>
            );
        };
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerButton: {
        marginTop: 8
    }
});

export default ViewError;
