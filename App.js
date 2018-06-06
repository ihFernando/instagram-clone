/* Core */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

/* Pacotes adicionais */
import { Router, Scene } from 'react-native-router-flux';

/* Class Rota */
import Route from './screens/Route';

/* Main Estrutura */
class App extends Component {
  render() {
    return (

      <Route />

    )
  }
}

export default App;

//AppRegistry.registerComponent('InstaluraMobile', () => App);
