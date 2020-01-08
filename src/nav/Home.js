import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    Animated,
    Dimensions
} from 'react-native'

import { colors, fonts } from '../theme'
const { width, height } = Dimensions.get('window')

class Home extends Component {
    static navigationOptions = {
        headerShown: false
    }
    state = {
        username: ''
    }
    AnimatedScale = new Animated.Value(1)
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.homeContainer}>
                    <Text style={styles.welcome}>Welcome</Text>
                    <Animated.Image
                        source={require('../assets/boomboxcropped.png')}
                        style={{ tintColor: colors.primary, width: width / 2, height: width / 2, transform: [{ scale: this.AnimatedScale }] }}
                        resizeMode='contain'
                    />
                    <Text style={styles.welcome}>Logout</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    homeContainer: {
        alignItems: 'center'
    },
    welcome: {
        fontFamily: fonts.light,
        color: 'rgba(0, 0, 0, .85)',
        marginBottom: 26,
        fontSize: 22,
        textAlign: 'center'
    },
    registration: {
        fontFamily: fonts.base,
        color: 'rgba(0, 0, 0, .5)',
        marginTop: 20,
        fontSize: 16,
        paddingHorizontal: 20,
        textAlign: 'center'
    }
})

export default Home