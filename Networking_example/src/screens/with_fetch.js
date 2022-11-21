import React, { useState, useEffect} from "react";
import {Text, View, SafeAreaView, StyleSheet, Button, ActivityIndicator, FlatList } from 'react-native';

function FetchScreen () {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }

    }
    useEffect(() => {
        getCountries();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text>Pavyzdys su Fetch</Text>
                <Button title="Get countries" onPress={() => getCountries()}/>
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

export default FetchScreen;