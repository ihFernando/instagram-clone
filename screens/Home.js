/* Core */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, FlatList } from 'react-native';

import Post from './Post';

const width = Dimensions.get('screen').width;

/* Main Estrutura */
class Home extends Component {
  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  // Fetch API do JavaScript para disparos de requisição e preparar o tratamento
  // Atribui o JSON ao State
  componentDidMount() {
  //  http://instalura-api.herokuapp.com/api/public/fotos/rafael
    fetch('http://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(response => response.json())
      .then(json => this.setState({fotos: json}))
  }

  render() {

    return (

      <View>

        <FlatList style={ styles.container }
          keyExtractor={ item => String(item.id) }
          data={ this.state.fotos }
          renderItem={ ({ item }) =>
            <Post foto={ item } />
          }
        />

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 20 }
});

export default Home;
