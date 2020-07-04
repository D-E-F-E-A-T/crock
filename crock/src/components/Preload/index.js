import React, { useState, useEffect, } from 'react';
import { View, ActivityIndicator, StyleSheet, } from 'react-native';
import firebase from '../../services/firebaseConnection/';

export default function Preload({ navigation }) {

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        navigation.navigate('Tabs');
      } else {
        navigation.navigate('SignIn');
      }
    })
  },[]);
 
 const[firstScreen, setFirstScreen ] = useState(true);

 
 return (
   <View style={styles.container}>
       <ActivityIndicator color="#FFB333" size={80} />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});