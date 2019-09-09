/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
      connected: 'Esperando conexión'
   }
  }

  async ping(){
  
    let req = await fetch('https://www.google.com');
    if(req.status == 200){
      this.setState({ connected: 'Conectado'})
      this.ping()
    }else{
      this.setState({ connected: 'No está conectado'})
      this.ping()
    }
  
   
  }


  render() {

    this.ping()

    /*this._interval = setInterval(() => {
      this.ping()
    }, 20000);*/

    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>{ this.state.connected }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
