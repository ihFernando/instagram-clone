import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  View,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      usuario: '',
      senha: '',
      mensagem: '',
      loading: true,
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('token')
      .then(token => {
        if(token)
          this.redireciona();
        else
          this.setState({loading: false})
      });
  }

  redireciona() {
    Actions.home();
  }

  efetuaLogin() {
    let login = this.state.usuario;
    let senha = this.state.senha;

    if(login && senha) {

      if(login == 'ihfernando') {

        if(senha == '123') {
          this.redireciona();
        } else {
          return this.setState({mensagem: 'Senha incorreta. Verifique campo de senha'});
        }
      } else {
        return this.setState({mensagem: 'Verifique o campo de Email'});
      }

    } else {
      return this.setState({mensagem: 'Digite seu email e senha'});
    }
  }

  render() {
    if(this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
              animating={true}
              color="#2980b9"
              size="large" />
          <Text style={styles.loading}>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.lang}> português (Brasil) </Text>

        <Image style={styles.logo}
            source={ require('../assets/image/logo_instagram.png') }
            resizeMode="contain" />

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Usuário"
                style={styles.input}
                autoCapitalize="none"
                onChangeText={texto => this.setState({usuario: texto})} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Senha"
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={texto => this.setState({senha: texto})} />
          </View>
          <TouchableOpacity onPress={this.efetuaLogin.bind(this)}>
            <View style={styles.btnEntrar}>
                <Text style={styles.btnEntrarTxt}> Entrar </Text>
            </View>
          </TouchableOpacity>

          <Text style={{color: '#ccc', padding: 10, fontSize: 11, textAlign: 'center'}}>
            Esqueceu seus dados de login?
            <Text style={{color: '#333', marginLeft: 10, fontWeight: 'bold'}}>
                Obtenha ajuda para entrar.
            </Text>
          </Text>

        </View>

        <Text style={styles.mensagem}>
          {this.state.mensagem}
        </Text>

      </View>
    );
  }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 40
  },
  lang: {
    color: '#ccc',
    height: 40,
    marginBottom: 30
  },
  logo: {
    marginTop: 80,
    height: 50
  },
  form: {
    width: width * 0.8
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f6f6f6',
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  input: {
    height: 40
  },
  mensagem: {
    marginTop: 15,
    color: '#e74c3c',
  },
  loading: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#95a5a6'
  },
  btnEntrar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D8EAFC',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 20,

  },
  btnEntrarTxt: {
    color: '#D8EAFC',
    textAlign: 'center',
    fontWeight: 'bold'
  }

});
