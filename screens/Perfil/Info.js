/* Core */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width;

/* Main Estrutura */
class Info extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cabecalho}>

          <View style={styles.fotoUsuario}>
            <Text>Foto</Text>
          </View>

          <View style={styles.status}>
            <View style={styles.statusValores}>
              <View>
                <Text style={styles.usuarioTitle}> 39 </Text>
                <Text style={styles.textCinza}> publicaçõ... </Text>
              </View>
              <View>
                <Text style={styles.usuarioTitle}> 214 </Text>
                <Text style={styles.textCinza}> seguidores </Text>
              </View>
              <View>
                <Text style={styles.usuarioTitle}> 254 </Text>
                <Text style={styles.textCinza}> seguindo </Text>
              </View>
            </View>
            <View style={styles.statusBtnPerfil}>
              <Text style={styles.btnEditarPerfil}> Editar perfil </Text>
            </View>
          </View>

        </View>
        <View style={styles.descricao}>
          <Text style={styles.descricaoTitle}> ihfernando </Text>
          <Text style={styles.textCinza}> Descrição do perfil blablabla </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  botaoIcon: {
    width: 25, height: 25
  },
  textCinza: {
    color: '#888888'
  },
  usuarioTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,

  },
  fotoUsuario: {
    width: 80,
    height: 80,
    backgroundColor: '#cccccc',
    borderRadius: 50,
    padding: 10
  },
  status: {
  },
  statusValores: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 50,
    padding: 10
  },
  statusPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnEditarPerfil: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 4,
    textAlign: 'center',
    marginLeft: 40
  },
  descricao: {
    padding: 10
  },
  descricaoTitle: {

  }
});

export default Info;
