/* Core */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width;

/* Main Estrutura */
class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      foto: this.props.foto
    }
  }


  /* Código referente a ação de curtir a foto */
  carregaIcone(curtida) {
    return curtida ? require('../assets/image/icon_curtir-solid.png') :
    require('../assets/image/icon_curtir-outline.png')
  }

  like() {
    const fotoAtualizada = {
      ...this.state.foto,
      likeada: !this.state.foto.likeada
    }
    this.setState({ foto: fotoAtualizada })
  }

  /* Código referente a ação de exibir numero de curtidas */
  exibeCurtida(likers){
    if (likers.length <= 0 )
      return;

    return(
      <Text style={styles.likes}>
        {foto.likers.length} {foto.likers.length > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  render() {
    // Declaro as variáveis que participaram como estado padrão do metódo render
    const { foto } = this.state;

    return (

      <View>
        <View style={ styles.cabecalho }>
        <Image source={{ uri: foto.urlPerfil }}
          style={ styles.fotoDePerfil } />
          <Text>{ foto.loginUsuario }</Text>
        </View>

        <Image source={{ uri: foto.urlFoto }}
          style={ styles.foto } />

        <View style={styles.rodape}>
          <TouchableOpacity onPress={(this.like.bind(this))}>
            <Image style={styles.botaoDeLike}
              source={ this.carregaIcone(foto.likeada) } />
          </TouchableOpacity>

          {this.exibeCurtida(foto.likers)}
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  cabecalho: { margin: 10, flexDirection: 'row', alignItems: 'center' },
  fotoDePerfil: { marginRight: 10, borderRadius: 20, width: 30, height: 30 },
  foto: { width: width, height: width },

  rodape: { margin: 10, },

  botaoDeLike: { width: 25, height: 25 },
  likes: { fontWeight: 'bold', marginTop: 10 }

});

export default Post;
