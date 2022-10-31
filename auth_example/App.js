import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowScreen from './src/screens/showScreen';
import AddScreen from './src/screens/addScreen';
import LoginScreen from './src/screens/loginScreen';
import RegistrationScreen from './src/screens/registerScreen';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PrivateContainer = ({navigation: {navigate}}) => {
  signOut = () => {
    auth()
      .signOut() 
      .then(() => {
        console.log('Sign out')
        navigate('Login_page')
      })

  }
  return (
    <Tab.Navigator
      initialRoute="SHOW"
      screenOptions={{ title: 'Add cars', tabBarActiveTintColor: '#deaf04'}}
    >
      <Tab.Screen
        name="SHOW"
        component={ShowScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => signOut()}
              title="Sign out"
            />
          ),
        }}
      />
      <Tab.Screen
        name="ADD"
        component={AddScreen}
      />

    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login_page">
        <Stack.Screen
          name="Login_page"
          component={LoginScreen}
          options={{ title: 'Login page', headerShown: false }}
        />
        <Stack.Screen
          name="Register_page"
          component={RegistrationScreen}
          options={{ title: 'Register page', headerShown: false }}
        />
        <Stack.Screen
          name="Private_page"
          component={PrivateContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;
