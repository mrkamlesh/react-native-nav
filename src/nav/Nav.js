import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';

const AppStackNavigator = createStackNavigator({
    Main: {
        screen: Home,
    },
});

const StackNav = createAppContainer(AppStackNavigator)

class Nav extends React.Component {
    render() {
        return (
            <StackNav />
        )
    }
}

export default Nav