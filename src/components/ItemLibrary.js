import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppTextBold from './AppTextBold';
import AppTextRegular from './AppTextRegular';
import AppTextConsola from '/AppTextConsola';

const itemLibrary = (props) => {
    return <View>
            <AppTextBold>{ props.name }</AppTextBold>
            <AppTextRegular>{ props.link }</AppTextRegular>
            <AppTextConsola>{ props.license }</AppTextConsola>
        </View>
}

const styles = StyleSheet.create({

});

export default itemLibrary;
