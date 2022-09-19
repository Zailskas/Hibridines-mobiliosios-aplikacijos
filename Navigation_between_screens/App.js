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
import HomeScreen from './src/screens/StackScreen/HomeScreen';
import SecondStackScreen from './src/screens/StackScreen/SecondStackScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarDataScreen from './src/screens/StackScreen/CarDataInformationScreen';
import FirstTabScreen from './src/screens/TabScreens/FirstTabScreen';
import SecondTabScreen from './src/screens/TabScreens/SecondTabScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="firstTabPage" component={FirstTabScreen}/>
      <Tab.Screen name="secondTabPage" component={SecondTabScreen}/>
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SecondStackPage" component={SecondStackScreen}/>
        <Stack.Screen name="TabStackScreen" component={TabHome} />
        <Stack.Screen name="CarDataScreen" component={CarDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
