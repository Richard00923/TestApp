import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FullScreenImage from './FullScreenImage';
import Gallery from "./Gallery";

const Stack = createStackNavigator();

const Page2 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="Image" component={FullScreenImage} />
        </Stack.Navigator>
    );
};

export default Page2;