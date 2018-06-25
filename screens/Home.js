/* Core */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

import Post from './Post';

import Topo from './Topo';
import Footer from './Footer';

const width = Dimensions.get('screen').width;

/* Main Estrutura */
class Home extends Component {
  constructor() {
    super();
    this.state = {
      fotos: [{"urlPerfil": "https://instagram.fssz6-1.fna.fbcdn.net/vp/ddc4b23306b23dceb3b19a223154c691/5BACA4E8/t51.2885-19/s150x150/14733119_1178888948865381_8303953524580941824_a.jpg","loginUsuario": "hahahalexandre","horario":"24/04/2018 16:45","urlFoto": "https://instagram.fssz6-1.fna.fbcdn.net/vp/5def509555589a6f87ba5f5b33637acc/5BBBE5C8/t51.2885-15/s640x640/sh0.08/e35/29093899_232837627279097_180249482376511488_n.jpg","id": 1,"likeada": true,"likers": 84,"comentarios": [],"comentario": "Lana Del Vale"},{"urlPerfil": "https://instagram.fssz6-1.fna.fbcdn.net/vp/ddc4b23306b23dceb3b19a223154c691/5BACA4E8/t51.2885-19/s150x150/14733119_1178888948865381_8303953524580941824_a.jpg","loginUsuario": "hahahalexandre","horario": "31/12/2017 16:45","urlFoto": "https://instagram.fssz6-1.fna.fbcdn.net/vp/d9660bab424c58738ad876dfb7ac6d2c/5BEAF91E/t51.2885-15/s750x750/sh0.08/e35/26066999_141772679859647_583578707113803776_n.jpg","id": 2,"likeada": true,"likers": 41,"comentarios": [],"comentario": "Meu desejo para #2018: get in the f*cking robot, Shinji!"},{"urlPerfil": "https://instagram.fssz4-1.fna.fbcdn.net/vp/8d4043e4da4afd3ef2fac7b944d5de69/5BAA9F1C/t51.2885-19/s150x150/34611416_488697801555360_5181444096308281344_n.jpg ","loginUsuario": "Romulo_js","horario": "18/06/2017 16:45","urlFoto": "https://instagram.fssz4-1.fna.fbcdn.net/vp/db10a6c70f17ab394e369f0905378d65/5BA4C2FE/t51.2885-15/e15/11263501_805399056222602_1378715006_n.jpg","id": 3,"likeada": false,"likers": 16,"comentarios": [],"comentario": "Poooco transito... kkkk"},{"urlPerfil": "https://instagram.fssz4-1.fna.fbcdn.net/vp/8d4043e4da4afd3ef2fac7b944d5de69/5BAA9F1C/t51.2885-19/s150x150/34611416_488697801555360_5181444096308281344_n.jpg","loginUsuario": "romulo_js","horario": "15/06/2017 15:45","urlFoto": "https://instagram.fssz4-1.fna.fbcdn.net/vp/e37885a53393e204558e335696e9bcfd/5BB355DE/t51.2885-15/e15/11243947_825004690920063_1240487539_n.jpg","id": 4,"likeada": false,"likers": 13,"comentarios": [],"comentario": "#2013"}]
    }
  }

  // Fetch API do JavaScript para disparos de requisição e preparar o tratamento
  // Atribui o JSON ao State
  componentDidMount() {
   //http://instalura-api.herokuapp.com/api/public/fotos/rafael
    // fetch('http://instalura-api.herokuapp.com/api/public/fotos/rafael')
    //   .then(response => response.json())
    //   .then(json => this.setState({fotos: json}))
  }

  render() {

    return (

      <View style={{ marginTop: 25, flex: 1, backgroundColor: '#ffffff' }}>
        <View style={{flex: .1}}>
          <Topo />
        </View>
        <ScrollView style={{flex: .8}}>
          <FlatList
            keyExtractor={ item => String(item.id) }
            data={ this.state.fotos }
            renderItem={ ({ item }) =>
              <Post foto={ item } />
            }
          />
        </ScrollView>
        <View style={{flex: .1}}>
          <Footer />
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
});

export default Home;
