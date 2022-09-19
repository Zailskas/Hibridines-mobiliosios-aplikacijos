import React from 'react';
import {
  SafeAreaView,
  Text,
  Button
} from 'react-native';

function FirstTabScreen() {
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
           <Text>It is the first tab screen</Text>
       </SafeAreaView>
    )
}

export default FirstTabScreen;