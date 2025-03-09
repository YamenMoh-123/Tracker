import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { styles } from '../styles/HomeScreenStyles';

export default function HomeScreen() {
    const { refetch, isError } = useQuery({
        queryKey: ['testData'],
        queryFn: async () => axios.get('http://localhost:5261/test/get'),
    });

    if (isError){
        console.log("ERROR")
    }
    else{
        console.log("SUCCESS")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => refetch()}>
                <Text>Call GET</Text>
            </TouchableOpacity>
        </View>
    );
}
