import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const CustomTextInput = ({value, onChangeText, placeholder, title, secure}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.title}>{title}:</Text>
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secure}
    />
  </View>
);

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    paddingBottom: 5,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: "75%"
  }
});