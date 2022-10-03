import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { useSelector } from 'react-redux';

function HomeScreen({navigation: { navigate }}) {
  const counter_value = useSelector((state) => state.value);
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text>It is home page</Text>
           <Text>Values is: {counter_value.value}</Text>
           <Button
              title="Go to secondStackPage"
              onPress={() => navigate('SecondStackPage')}
           />
       </SafeAreaView>
    )
}

export default HomeScreen;