import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomeScreen from './src/screens/HomeScreen';
import SignUp from "./src/screens/SignUp";
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignUp">
                    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }}/>
                    <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
