/* Core */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const width = Dimensions.get('screen').width;

import Topo from './Topo.js';
import Info from './Info.js';
import Footer from '../Footer.js';

/* Main Estrutura */
class Perfil extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={{ marginTop: 20, flex: 1, backgroundColor: '#ffffff' }}>
        <View style={{flex: .1}}>
          <Topo usuario="ihfernando" />
        </View>
        <ScrollView style={{flex: .8}}>
          <Info />
        </ScrollView>
        <View style={{flex: .1}}>
          <Footer />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});

export default Perfil;
