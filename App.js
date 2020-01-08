import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Tabs from './src/auth/Tabs'
import Nav from './src/nav/Nav'

export class App extends Component {
  render() {
    return (
      <Nav />// <Tabs /> 
    )
  }
}

export default App
