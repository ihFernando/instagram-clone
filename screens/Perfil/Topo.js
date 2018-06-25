/* Core */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width;

/* Main Estrutura */
class Topo extends Component {
  constructor(props){
    super(props)
    this.state = {
      usuario: this.props.usuario
    }
  }

  render() {
    const { usuario } = this.state;
    return (
      <View style={styles.container}>

        <Text style={styles.usuarioTitle}> {usuario} </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  botaoIcon: {
    width: 25, height: 25
  },
  usuarioTitle: {
    fontWeight: 'bold',
    fontSize: 18,

  }
});

export default Topo;
