/* Core */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Pacotes adicionais */
import { Router, Scene } from 'react-native-router-flux';

/* Telas */
import Login from './Login';
import Home from './Home';
import Perfil from './Perfil/Perfil';

/* Main Estrutura */
class Route extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">

          <Scene
            hideNavBar={true}
            key="login"
            component={Login}

          />

          <Scene
            hideNavBar={true}
            key="home"
            component={Home}
            initial
          />

          <Scene
            hideNavBar={true}
            key="perfil"
            component={Perfil}

          />

        </Scene>

      </Router>

    )
  }
}

export default Route;
