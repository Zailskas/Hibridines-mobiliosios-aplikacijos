import React, { Component } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ChildrenComponent extends Component {
    sendSurname = (surname) => {
      this.props.callback(surname);
    }
    render() {
        const text = 'Zailskas'
      return (
      <View>
        <Text>{this.props.text}</Text>
        <Button title="Children Button" onPress={this.sendSurname.bind(this, text)}/>
      </View>
      )
    }
  }

export default ChildrenComponent