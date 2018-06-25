/* Core */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width;

/* Main Estrutura */
class Topo extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.botaoIconCamera}
            source={ require('../assets/image/icon_camera.png') } />
        </TouchableOpacity>

        <Image style={styles.botaoIcone_logo}
          source={ require('../assets/image/logo_instagram.png') } />

        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.botaoIcon}
            source={ require('../assets/image/icon_inbox.png') } />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 50,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  botaoIcon: {
    width: 25, height: 25
  },
  botaoIcone_logo: {
    width: 110, height: 35
  },
  botaoIconCamera: {
    width: 30, height: 30
  }
});

export default Topo;
