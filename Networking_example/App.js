/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/homeScreen';
import AxiosScreen from './src/screens/with_axios';
import FetchScreen from './src/screens/with_fetch';

const Stack = createNativeStackNavigator();


function App () { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Axios" component={AxiosScreen}/>
        <Stack.Screen name="Fetch" component={FetchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
