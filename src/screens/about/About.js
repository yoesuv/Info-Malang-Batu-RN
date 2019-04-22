import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager';

import { THEME_COLOR } from '../../data/Colors';

import InformationScreen from './Information';
import ChangelogScreen from './Changelog';
import ThanksScreen from './Thanks';
import LibrariesScreen from './Libraries';

class AboutScreen extends Component {

    renderTab() {
         return (
             <PagerTitleIndicator
                style={styles.indicatorContainer}
                trackScroll={true}
                itemTextStyle={styles.indicatorText}
                selectedItemTextStyle={styles.indicatorSelectedText}
                selectedBorderStyle={styles.selectedBorderStyle}
                titles={['Information', 'Changelog','Thanks','Libraries']}
             />
         )
   }

    render () {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={styles.viewPagerContainer}
                    initialPage={0}
                    indicator={this.renderTab()}>
                        <View>
                            <InformationScreen />
                        </View>
                        <View>
                            <ChangelogScreen />
                        </View>
                        <View>
                            <ThanksScreen />
                        </View>
                        <View>
                            <LibrariesScreen />
                        </View>

                </IndicatorViewPager>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    viewPagerContainer: {
        flex:1,
        flexDirection: 'column-reverse',
    },
    indicatorContainer: {
        backgroundColor: THEME_COLOR
    },
    indicatorText: {
        fontSize: 14,
        color: 0xFFFFFF99
    },
    indicatorSelectedText: {
        fontSize: 14,
        color: 0xFFFFFFFF
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: 'white'
    }
})

export default AboutScreen;
