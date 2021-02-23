import React from 'react'
import { Stylesheet, View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import SettingsScreen from '../Screens/SettingsScreen.js'
import NotificationsScreen from '../Screens/NotificationScreen.js'

export default class App extends React.Component {
     render(){
         return (

             <AppContainer />
             
         );
     }
}

const TabNavigator = createBottomTabNavigator({
    Settings : {screens: SettingsScreen},
    Notifications : {screens: NotificationsScreen},
});

const AppContainer = createAppContainer(TabNavigator);