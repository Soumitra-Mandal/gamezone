import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../styles/globals';
export default function Home(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
    )
}
