import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { database, firebase } from '@react-native-firebase/database';



function DeleteScreen() {
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

  const renderItem = ({item}) => {
    return (
      <View style={styles.cars}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.make}>
            {item.make} {item.model}
          </Text>
        </View>
        <View style={styles.deleteButton}>
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.addButton}>DELETE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
    
  }
  
  deleteItem = (id)  => {
    reference.ref("cars/"+id).remove()
    .then(() => console.log('Istrinta', id))
    .catch(()=> console.log('nope'))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete car</Text>
      <FlatList 
          data={cars}
          renderItem={renderItem}            
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
  },
  cars: {
    padding: 20,
    flexDirection: 'row',
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
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addButton: {
    fontSize: 18,
  },
  addButtonContainer: {
    width: 100,

    backgroundColor: 'tomato',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default DeleteScreen;