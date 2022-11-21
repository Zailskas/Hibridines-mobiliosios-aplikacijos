import React from "react";
import {Text, View, SafeAreaView, Button, StyleSheet, Alert } from 'react-native'

function HomeScreen ({navigation}) {


    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text>Pavyzdys su Fetch</Text>
                <Button 
                    title="Fetch"
                    onPress={() => navigation.navigate('Fetch')}
                />
            </View>
            <View style={{alignItems: 'center'}}>
                <Text>Pavyzdys su Axios</Text>
                <Button 
                    title="Axios"
                    onPress={() => navigation.navigate('Axios')}
                />
            </View>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around"
    }
})

export default HomeScreen;