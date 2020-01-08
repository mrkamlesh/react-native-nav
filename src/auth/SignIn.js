import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Modal, Button } from 'react-native'
import Input from '../components/Input'

import { colors, fonts } from '../theme'

export default class SignIn extends Component {
    state = {
        username: '',
        password: '',
        accessCode: ''
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Image
                        source={require('../assets/shape.png')}
                        style={styles.headingImage}
                        resizeMode="contain"
                    />
                </View>
                <Text> SignIn Screen </Text>
                <Text style={[styles.greeting]}>
                    Welcome back,
                </Text>
                <Text style={[styles.greeting2]}>
                    sign in to continue
                </Text>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="User Name"
                        type='username'
                        onChangeText={this.onChangeText}
                        value={this.state.username}
                    />
                    <Input
                        placeholder="Password"
                        type='password'
                        onChangeText={this.onChangeText}
                        value={this.state.password}
                        secureTextEntry
                    />
                </View>

                <Button
                    title='Sign In'
                    style={styles.button}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        flexDirection: 'row'
    },
    headingImage: {
        width: 38,
        height: 38
    },
    errorMessage: {
        fontSize: 12,
        marginTop: 10,
        color: 'transparent',
        // fontFamily: fonts.base
    },
    inputContainer: {
        marginTop: 20
    },
    input: {
        height: 45,
        marginBottom: 15,
        borderBottomWidth: 1.5,
        fontSize: 16,
        // borderBottomColor: colors.primary,
        // fontFamily: fonts.light
    },
    button: {
        marginTop: 20,
        paddingTop: 30
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    greeting: {
        marginTop: 20,
        fontSize: 24,
        // fontFamily: fonts.light
    },
    greeting2: {
        color: '#666',
        fontSize: 24,
        marginTop: 5,
        // fontFamily: fonts.light
    }
})
