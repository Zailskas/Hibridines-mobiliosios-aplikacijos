/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { Button } from "@react-native-material/core";
import ButtonComponent from './src/buttonComponent';

function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [initialElements, setInitialElements] = useState([]);
  const [retrieve, setRetrieve] = useState(true);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const valueString = await AsyncStorage.getItem('@storage_Key');
        const value = JSON.parse(valueString);
        console.log('retrieve: ', valueString);
        value === null ? setInitialElements([]) : setInitialElements(value);
      } catch(error) {
        console.log(error);
      }
    }
    if (retrieve)
      retrieveData();
      setRetrieve(false);
  }, [retrieve])

  
  const saveData = async (firstname, lastname) => {
    try {
      console.log('firstname', firstname);
      const newObj = {
        id: uuid.v4(),
        firstname: firstname,
        lastname: lastname
      }
      console.log('55: ' ,newObj)
      console.log('56: ', initialElements)
      const jsonValue = JSON.stringify([...initialElements, newObj]);
      console.log(jsonValue)
      await AsyncStorage.setItem('@storage_Key', jsonValue);
      setInitialElements(JSON.parse(jsonValue));
      console.log('yes');
    } catch (e) {
      console.log('Can not save value');
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      console.log('Get data: ', jsonValue);
      setInitialElements(JSON.parse(jsonValue));
    } catch (e) {
      console.log("Can't read data");
    }
  }
  
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      const emptyArray = [];
      setInitialElements(emptyArray);
    } catch (e) {

    }
  }

  console.log(initialElements);

  return (
    <SafeAreaView>
      <TextInput
        style={{ height: 40 }}
        placeholder="Insert firstname here"
        defaultValue={firstname}
        onChangeText={(value) => setFirstname(value)}
      />
      <TextInput 
        style={{ height: 40 }}
        placeholder="Insert lastname here"
        defaultValue={lastname}
        onChangeText={(value) => setLastname(value)}
      />
      <ButtonComponent title="Save data" event={() => saveData(firstname, lastname)}/>
      <ButtonComponent title="Read data" event={() => getData()}/>
      {/* <Button
        title="Read data"
        style={{ alignSelf: 'center'}}
        onPress={() => getData()}
      /> */}
      <Button 
        title="Clear async storage"
        style={{ alignSelf: 'center', marginTop: 10}}
        onPress={() => clearAll()}
      />
      {/* <ButtonComponent title="Test button component" event={() => saveData(firstname, lastname)}/> */}
      <FlatList
        data={initialElements}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.firstname}</Text>
            </View>
          )
        }
        }
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )

}

export default App;
