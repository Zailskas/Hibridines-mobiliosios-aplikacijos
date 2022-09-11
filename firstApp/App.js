/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ChildrenComponent from "../firstApp/childrenComponent"



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Viko',
      show: false, 
      surname: 'Ne nulls'
    }
  }
  updateInformation = () => {
    if (this.state.show === false) {
      this.setState({
        name: 'EIF',
        show: true
      })
    } 
    else if (this.state.show === true){
      this.setState({
        name: 'Viko',
        show: false
      })
    }
  }
  getSurname = (text) => {
    this.setState({
      surname: text
    })
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.sectionDescription}>
          <Text>Hello world</Text>
        </View>
        <View>
          <Text> Rugsejo 2 </Text>
          <Text>{this.state.name}</Text>
          <Button title="Press me" onPress={() => this.updateInformation()}/>
        </View>
        <View>
          <ChildrenComponent text={this.state.name} callback={this.getSurname}/>
          <Text>{this.state.surname}</Text>
        </View>
      </SafeAreaView>
      
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
