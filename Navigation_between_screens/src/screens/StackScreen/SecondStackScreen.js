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

function SecondStackScreen({navigation: { navigate }}) {
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text>It is second stack page</Text>
           <Button
              title="Go to Tabs screen"
              onPress={() => navigate('TabStackScreen')}
           />
       </SafeAreaView>
    )
}

export default SecondStackScreen;