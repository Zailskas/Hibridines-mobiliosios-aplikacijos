import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';

const CustomButton = ({title, onPress, disabled}) => (
  <View style={styles.addButtonContainer}>
    <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
      <View style={[styles.addButton, {backgroundColor: disabled === false ? '#e2e607' : '#B8B8B8'}]}>
        <Text style={styles.addButtonText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  addButtonText: {
    fontSize: 22,
    lineHeight: 22,
  },
  addButton: {
    width: 120,
    height: 40,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  addButtonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10
  },
});

export default CustomButton;