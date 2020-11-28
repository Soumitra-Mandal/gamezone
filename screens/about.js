import React from 'react';
import { Text, View } from 'react-native';
import {globalStyles} from '../styles/globals';


export default function About(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
            <Text>This app is a property of Soumitra Mandal</Text>
        </View>
    )
}



