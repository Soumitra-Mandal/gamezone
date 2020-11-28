import React,{useState} from 'react';
import {Text, View,FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/globals';
import Card from '../shared/card';

export default function Home({navigation}){
const [reviews, setReviews] = useState([
    {title:"Pokemon GO",rating:'3',body:"Kuch Bhi", key:'1'},
    {title:"Clash Royale",rating:'4',body:"Nice movie", key:'2'},
    {title:"Asphalt 8",rating:'5',body:"Mast Hai", key:'3'},
    {title:"Call Of Duty",rating:'4',body:"It is amazing", key:'4'},

])

    return (
        <View style={globalStyles.container}>
        <FlatList
            data = {reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate("Review Details",item)}>
                <Card>
                <Text style = {globalStyles.titleText}>{item.title}</Text>
                </Card>
                </TouchableOpacity>
            )}
        />
        </View>
    )
}
