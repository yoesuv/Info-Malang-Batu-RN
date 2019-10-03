import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from '../components/Icon';

import iconList from '../images/ic_menu_list.png';
import iconListSelected from '../images/ic_menu_list_selected.png';
import iconGallery from '../images/ic_menu_gallery.png';
import iconGallerySelected from '../images/ic_menu_gallery_selected.png';
import iconMaps from '../images/ic_menu_maps.png';
import iconMapsSelected from '../images/ic_menu_maps_selected.png';
import iconOther from '../images/ic_menu_other.png';
import iconOtherSelected from '../images/ic_menu_other_selected.png';

import { THEME_COLOR } from '../data/Colors';

import { ListStack } from './ListRoute';
import { GalleryStack } from './GalleryRoute';
import { MapStack } from './MapRoute';
import { AboutStack } from './AboutRoute'

const TabNavigator = createBottomTabNavigator(
    {
        List: ListStack,
        Gallery: GalleryStack,
        Map: MapStack,
        About: AboutStack
    },{
        initialRouteName: 'List',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'List') {
                    if (focused) {
                        return <Icon image={iconListSelected}/>;
                    }
                    return <Icon image={iconList}/>;
                } else if (routeName === 'Gallery') {
                    if (focused) {
                        return <Icon image={iconGallerySelected}/>;
                    }
                    return <Icon image={iconGallery}/>;
                } else if (routeName === 'Map') {
                    if (focused) {
                        return <Icon image={iconMapsSelected}/>;
                    }
                    return <Icon image={iconMaps}/>;
                }
                    if (focused) {
                        return <Icon image={iconOtherSelected}/>;
                    }
                    return <Icon image={iconOther}/>;
                },
        }),
        tabBarOptions: {
            activeTintColor: THEME_COLOR
        }
    }
);

export const Navigation = createAppContainer(TabNavigator);
