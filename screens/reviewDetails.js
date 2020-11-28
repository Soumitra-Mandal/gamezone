import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {globalStyles} from '../styles/globals';
import Card from '../shared/card';
import {images} from '../shared/image';


export default function ReviewDetails({route}){
    const { title, body,rating } = route.params; 
    return (
        <View style={globalStyles.container}>
            <Card>
            <Text>{title}</Text>
            <Text>Review: {body}</Text>
            <View style={styles.rating}>
            <Text>Gamezone rating: </Text>
            <Image source={images[rating].src}></Image>
            </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
 rating:{

 },
});