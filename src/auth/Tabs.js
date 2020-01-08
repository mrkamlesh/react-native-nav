import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { colors, fonts } from '../theme'
import SignUp from './SignUp';
import SignIn from './SignIn';


const TabNavigator = createBottomTabNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'Sign Up',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/signInButton.png')}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../assets/signUpButton.png')}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 26,
        height: 26
    }
});

const routeConfig = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
        indicatorStyle: { backgroundColor: colors.secondary },
        labelStyle: {
            fontFamily: fonts.base,
            fontSize: 12
        },
        style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            paddingBottom: 3
        },
    }
}
export default createAppContainer(TabNavigator, routeConfig);