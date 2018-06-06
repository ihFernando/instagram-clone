/* Core */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Pacotes adicionais */
import { Router, Scene } from 'react-native-router-flux';

/* Telas */
import Home from './Home';

/* Main Estrutura */
class Route extends Component {
  render() {
    return (

      <Home />

    )
  }
}

export default Route;
