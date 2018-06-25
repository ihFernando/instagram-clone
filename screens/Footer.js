/* Core */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width;

import { Actions } from 'react-native-router-flux';

/* Main Estrutura */
class Footer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.home()}>
          <Image style={styles.botaoIcon}
            source={ require('../assets/image/icon_home.png') } />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.botaoIconPesquisa}
            source={ require('../assets/image/icon_search.png') } />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.botaoIcon}
            source={ require('../assets/image/icon_add.png') } />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Image style={styles.botaoIcon}
            source={ require('../assets/image/icon_curtir-outline.png') } />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.perfil()}>
          <Image style={styles.botaoIcon}
            source={ require('../assets/image/icon_user.png') } />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eee',
    borderTopWidth: 1
  },
  botaoIcon: {
    width: 25, height: 25
  },
  botaoIconPesquisa: {
    width: 30, height: 30
  }
});

export default Footer;
