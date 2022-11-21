import React, { useState, useEffect } from "react";
import {Text, View, SafeAreaView, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios'; //use specific axios version https://www.npmjs.com/package/axios/v/0.26.0 

function AxiosScreen () {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCountries = () => {
        axios.get('https://restcountries.com/v3.1/all')
            .then((json) => setData(json.data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        getCountries();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text>Pavyzdys su Axios</Text>
            </View>
            <View>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{item.name.common}</Text>
                            </View>
                        )}
                    />
                )}
            </View>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AxiosScreen;