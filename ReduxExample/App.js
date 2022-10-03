/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import showScreen from './src/showScreen';
import addScreen from './src/addScreen';
import deleteScreen from './src/deleteScreen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers  from './store/reducers/index';
import ReduxThunk from 'redux-thunk'

const Tab = createBottomTabNavigator();
const store = createStore(combineReducers, applyMiddleware(ReduxThunk));

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="SHOW" component={showScreen} />
            <Tab.Screen name="ADD" component={addScreen} />
            <Tab.Screen name="DELETE" component={deleteScreen} />
          </Tab.Navigator>
      </NavigationContainer>
      </Provider>
      
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
