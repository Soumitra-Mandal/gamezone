import React,{useState} from 'react';
import {Text, View,FlatList, TouchableOpacity, TouchableWithoutFeedback, Modal,StyleSheet, Keyboard} from 'react-native';
import {globalStyles} from '../styles/globals';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';


export default function Home({navigation}){
const [modal, setModal] = useState(false);
const [reviews, setReviews] = useState([
    {title:"Pokemon GO",rating:'3',body:"Kuch Bhi", key:'1'},
    {title:"Clash Royale",rating:'4',body:"Nice movie", key:'2'},
    {title:"Asphalt 8",rating:'5',body:"Mast Hai", key:'3'},
    {title:"Call Of Duty",rating:'4',body:"It is amazing", key:'4'},

]);


    const addReview = (review)=>{
        review.key = Math.random.toString();
        setReviews((CurrentReviews)=>{
            return[...CurrentReviews, review];
        });
       setModal(false);

    }

    return (
        <View style={globalStyles.container}>
        <Modal visible={modal} animationType='slide'>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style = {styles.modalContent}>
        <MaterialIcons
            name='close'
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress = {()=>setModal(false)}
        />
        <ReviewForm addReview={addReview}/>
        </View>
       </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons
            name='add'
            size={24}
            onPress = {()=>setModal(true)}
            style={styles.modalToggle}
        />
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

const styles = StyleSheet.create({
    modalContent:{
     flex:1
    },
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#c2c2c2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalClose:{
        marginTop:20,
        marginBottom:0 
    }
});