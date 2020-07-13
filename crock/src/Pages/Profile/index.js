import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import firebase from '../../services/firebaseConnection';

import { Container, Header, CenterHeader, TextName, } from './styles';

export default function Profile() {
 
 const[nome, setNome] = useState('');

 useEffect(()=>{

    async function loadName(){
        let uid = firebase.auth().currentUser.uid;

        await firebase.database().ref('users').child(uid)
        .once('value').then(snapshot => {
            let name = snapshot.val().nome;

            setNome(name);
        });
    }
    loadName();
 },[]);
 return (
   <Container>
       <Header>
        <CenterHeader>
            <TextName> {nome} </TextName>
        </CenterHeader>
       </Header>
   </Container>
  );
}