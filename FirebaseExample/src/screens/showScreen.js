import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import {database, firebase } from '@react-native-firebase/database';


function ShowScreen() {
  const [cars, setCars] = useState([]);
  
  const reference = firebase
        .app()
        .database('Realtime database reference url')

  useEffect(() => {
    reference.ref('cars')
    .on('value', (snapshot) => {
      setCars([]);
      snapshot.forEach((child) => {
        const newObj = {
          id: child.val().id,
          make: child.val().make,
          model: child.val().model
        };
        setCars(emptyArray => [...emptyArray, newObj]);
      })
    }) 
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cars</Text>
        <FlatList 
          data={cars}
          renderItem={(item) => {
            return (
              <View style={styles.cars}>
              <Text style={styles.make}>
                {item.item.make} {item.item.model}
              </Text>
            </View>
          )
          }
          }            
          keyExtractor={item => item.id}
          scrollEnabled={true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carsContainer: {
    borderTopWidth: 3,
    borderTopColor: '#ddd',
    flex: 1,
  },
  cars: {
    padding: 20,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  make: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  model: {
    fontSize: 14,
    color: '#999',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ShowScreen;