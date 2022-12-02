import { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import { THEME_COLOR } from '../data/colors';

const TabInformation = () => {
    return <Text>Tab Information</Text>
}

const TabChangelog = () => {
    return <Text>Tab Changelog</Text>
}

const TabThanks = () => {
    return <Text>Tab Thanks</Text>
}

const TabLibraries = () => {
    return <Text>Tab Libraries</Text>
}

export default function FragmentAbout() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'info', title: 'Information'},
        {key: 'changelog', title: 'Changelog'},
        {key: 'thanks', title: 'Thanks'},
        {key: 'libraries', title: 'Libraries'}
    ]);

    const renderScene = SceneMap({
        info: TabInformation,
        changelog: TabChangelog,
        thanks: TabThanks,
        libraries: TabLibraries,
    });

    return <View style={styles.container}>
        <Appbar.Header mode="small" statusBarHeight={0} style={{ backgroundColor: THEME_COLOR }}>
            <Appbar.Content title="About" titleStyle={styles.title} />
        </Appbar.Header>
        <TabView 
            initialLayout={{ width: Dimensions.get('window').width }}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar = { props =>
                <TabBar
                    {...props}
                    scrollEnabled
                    indicatorStyle={{ backgroundColor: 'white' }}
                    style={{ backgroundColor: THEME_COLOR }}
                    tabStyle={{width: 'auto'}}
                />
            }
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})