import React from 'react'
import { Image, Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { PeopleScreen } from './screens/PeopleScreen'
import { DecisionScreen } from './screens/DecisionScreen'
const platformOS = Platform.OS.toLowerCase()
import Icon from 'react-native-vector-icons/FontAwesome'
const tabs = TabNavigator(
    {
        PeopleScreen: {
            screen: PeopleScreen,
            navigationOptions: {
                tabBarLabel: 'People',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="rocket" size={30} color="#900" />
                ),
            },
        },
        DecisionScreen: {
            screen: DecisionScreen,
            navigationOptions: {
                tabBarLabel: 'Decision',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="rocket" size={30} color="#900" />
                ),
            },
        },
        RestaurantScreen: {
            screen: RestaurantScreen,
            navigationOptions: {
                tabBarLabel: 'Restaurants',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="rocket" size={30} color="#900" />
                ),
            },
        },
    },
    {
        initialRouteName: 'DecisionScreen',
        animationEnabled: true,
        swipeEnabled: true,
        backBehavior: 'none',
        lazy: true,
        /* Tabs go on top for Android, bottom for iOS. */
        tabBarPosition: platformOS === 'android' ? 'top' : 'bottom',
        tabBarOptions: {
            activeTintColor: '#ff0000',
            showIcon: true,
            /* Tabs on Android are overlapped by the status bar, so add some */
            /* padding to fix that. */
            style: {
                paddingTop:
                    platformOS === 'android' ? Constants.statusBarHeight : 0,
            },
        },
    } /* End options. */
)

export default tabs
