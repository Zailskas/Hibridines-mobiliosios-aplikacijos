/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput, SafeAreaView, FlatList
} from 'react-native';
import {Button, ListItem} from 'react-native-elements'
import uuid from 'react-native-uuid';

const carData = [
  {
    "id": 1,
  "make": "BMW",
  "model": "M3",
  "price": "80000"
  },
  {
    "id": 2,
  "make": "MERSEDES BENZ",
  "model": "C350",
  "price": "50000"
  }
]
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstnameValue: '',
      lastnameValue: '',
      // firstname: '',
      // lastname: '',
      users: []
    }
  }
  insertValues = () => {
    const user = {
      firstname: this.state.firstnameValue,
      lastname: this.state.lastnameValue, 
      userIndex: uuid.v4(),      
    }
    const users = [...this.state.users, user]
    this.setState({ users, firstnameValue: '', lastnameValue: '' }, ()=>{
      console.log(this.state.users)
    }
    )
  }
  inputChangeFirstname(firstnameValue) {
    console.log('Input firstname: ', firstnameValue);
    this.setState({firstnameValue})
  }
  inputChangeLastname(lastnameValue) {
    console.log('Input lastname: ', lastnameValue);
    this.setState({lastnameValue})
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View >
        <View style={[styles.box, {borderBottomColor: 'black', borderBottomWidth: 2}]}>
          <Text>Test</Text>
          <TextInput
            style={styles.input}
            placeholder="Firstname"
            value={this.state.firstnameValue}
            onChangeText = {(firstname) => this.inputChangeFirstname(firstname)}
          />
          <TextInput
            style={styles.input}
            placeholder="Lastname"
            value={this.state.lastnameValue}
            onChangeText = {(lastname) => this.inputChangeLastname(lastname)}
          />
          <Button
            title='Insert'
            type='outline'
            style={{padding: 10}}
            onPress={this.insertValues}
          />
          <Button title="Hey!" />
        </View>
        <View style={styles.box}>
          <Text>{this.state.firstnameValue}</Text>
          <Text>{this.state.lastnameValue}</Text>
        </View>
        <FlatList 
          keyExtractor={(users) => users.userIndex}
          data={this.state.users}
          renderItem={({item}) => {
            return (
              <View style={styles.carBox}>
                <Text>{item.firstname} {item.lastname}</Text>
              </View>
            )
          }}
        />
        <FlatList 
          keyExtractor={(carData) => carData.id}
          data={carData}
          renderItem={({item}) => {
            return (
              <View style={styles.carBox}>
                <Text>{item.make} modelio {item.model} kaina {item.price}</Text>
              </View>
            )
          }}
        />
        {
          carData.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
              <ListItem.Title>{item.make}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
      </View>
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box: {
    padding: 20,
    alignItems: 'center'
  },
  carBox: {
    margin: 1,
    alignItems: 'center', 
    borderWidth: 1,
    backgroundColor: "beige"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
