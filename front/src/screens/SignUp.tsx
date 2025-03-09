import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from '../styles/SignUpStyles';
import axios from "axios";

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    interface SignUpData {
        Email: string;
        Password: string;
    }

    const SubmitSignUpForm = async (data: SignUpData) => {
        console.log(data);
        const response = await axios.post('http://localhost:5261/auth/signup',
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        console.log(response.data);
    };


    const handleSignup = () => {
       // if (!email || !password) {
            //Alert.alert('Error', 'Please fill all fields');
        //} else {
            SubmitSignUpForm({Email: "first",Password: "second"})

        //}
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button title="Sign Up" onPress={handleSignup} />
        </View>
    );
}
