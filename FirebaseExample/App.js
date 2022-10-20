import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import showScreen from './src/screens/showScreen';
import addScreen from './src/screens/addScreen';
import deleteScreen from './src/screens/deleteScreen';


const Tab = createBottomTabNavigator();
function App () {
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="show" component={showScreen} />
            <Tab.Screen name="add" component={addScreen} />
            <Tab.Screen name="delete" component={deleteScreen} />
          </Tab.Navigator>
      </NavigationContainer>      
    )
}

export default App;