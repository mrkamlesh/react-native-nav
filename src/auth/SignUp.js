import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Modal, Button } from 'react-native'

import Input from '../components/Input'

import { colors, fonts } from '../theme'

const initialState = {
    username: '',
    password: '',
    email: '',
    phone_number: '',
    authCode: ''
}

export default class SignUp extends Component {
    state = initialState

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
                <Text style={styles.greeting}>
                    Welcome,
                </Text>
                <Text style={styles.greeting2}>
                    sign up to continue
                </Text>
                <View style={styles.inputContainer}>
                    <Input
                        value={this.state.username}
                        placeholder="User Name"
                        type='username'
                        onChangeText={this.onChangeText}
                    />
                    <Input
                        value={this.state.email}
                        placeholder="Email"
                        type='email'
                        keyboardType='email-address'
                        onChangeText={this.onChangeText}
                    />
                    <Input
                        value={this.state.password}
                        placeholder="Password"
                        secureTextEntry
                        type='password'
                        onChangeText={this.onChangeText}
                    />
                    <Input
                        placeholder="Phone Number"
                        type='phone_number'
                        keyboardType='numeric'
                        onChangeText={this.onChangeText}
                        value={this.state.phone_number}
                    />
                </View>
                <Button
                    title='Sign Up'
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
    inputContainer: {
        marginTop: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    greeting: {
        marginTop: 20,
        fontFamily: fonts.light,
        fontSize: 24
    },
    greeting2: {
        fontFamily: fonts.light,
        color: '#666',
        fontSize: 24,
        marginTop: 5
    },
    heading: {
        flexDirection: 'row'
    },
    headingImage: {
        width: 38,
        height: 38
    },
    errorMessage: {
        fontFamily: fonts.base,
        fontSize: 12,
        marginTop: 10,
        color: 'transparent'
    }
})
