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

function HomeScreen({navigation: { navigate }}) {
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text>It is home page</Text>
           <Button
              title="Go to secondStackPage"
              onPress={() => navigate('SecondStackPage')}
           />
       </SafeAreaView>
    )
}

export default HomeScreen;