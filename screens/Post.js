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
    this.setState({ foto: fotoAtualizada });
  }

  /* Código referente a ação de exibir numero de curtidas */
  exibeCurtida(likers) {
    if ( likers.length <= 0 )
      return;

    return(
      <Text style={styles.likes}>
        {foto.likers.length} {foto.likers.length > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  exibeLegenda(usuario, legenda) {
    if( legenda == '' )
      return;

    return (
      <Text style={styles.legenda}>
        <Text style={styles.legendaBold}>{usuario}</Text> {legenda}
      </Text>
    );
  }

  /* Exibe data da publicação da foto */
  exibeData(horario) {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let horarioVetor = horario.split("/");
    let mes = horarioVetor[1].split("0");
    let horarioFinal = horarioVetor[0]+" de "+meses[mes[1]];

    if( horario == '' )
      return;

    return(
      <Text style={styles.horario}>
        <Text style={styles.horarioData}>{horarioFinal.toUpperCase()} - </Text> VER TRADUÇÃO
      </Text>
    )

  }

  render() {
    // Declaro as variáveis que participaram como estado padrão do metódo render
    const { foto } = this.state;
    const legenda = "Legenda para foto (y)";

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

          <View style={styles.rodapeWrap}>

            <TouchableOpacity onPress={(this.like.bind(this))}>
              <Image style={styles.botaoIcon}
                source={ this.carregaIcone(foto.likeada) } />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Image style={styles.botaoIcon}
                source={ require('../assets/image/icon_comentario.png') } />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <Image style={styles.botaoIcon}
                source={ require('../assets/image/icon_compartilhar.png') } />
            </TouchableOpacity>

          </View>

          {this.exibeCurtida(foto.likers)}
          {this.exibeLegenda(foto.loginUsuario, legenda)}
          {this.exibeData(foto.horario)}
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  cabecalho: { margin: 10, flexDirection: 'row', alignItems: 'center' },
  fotoDePerfil: { marginRight: 10, borderRadius: 20, width: 30, height: 30 },
  foto: { width: width, height: width },

  rodape: { margin: 10 },
  rodapeWrap: { width: 100, flexDirection: 'row', justifyContent: 'space-between' },

  botaoIcon: { width: 25, height: 25 },
  likes: { fontWeight: 'bold', marginTop: 10 },

  legenda: { paddingTop: 10 },
  legendaBold: { fontWeight: 'bold' },

  horario: { paddingTop: 10, color: '#2d2d2d', fontSize: 11 },
  horarioData: { color: '#777' }

});

export default Post;
