import React, { useState, useEffect } from 'react';
import { Alert, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../../services/firebaseConnection/';

import { 
  Container, Text, Head,ContainerCenterHead, ButtonSignOut, TextName,
} from './styles';

export default function Profile({ navigation }) {

  const[nome, setNome] = useState('');
  useEffect(() => {
    let uid = firebase.auth().currentUser.uid;

    async function loadName(){
      await firebase.database().ref('users').child(uid).once('value').then((snapshot) => {
        let name = snapshot.val().nome;
  
        setNome(name);
      });
    }

    loadName();
  },[]);

  function exit(){
    Alert.alert('Crock',
      `Desconectar do App`,
      [
        {
          text: 'Cancelar',
          style: "cancel"
        },
        {
          text: 'Sair',
          style: () => SignOutProfile(),
        }
      ]
    );
  }

  function SignOutProfile(){
    return firebase.auth().signOut();
  }
 return (
    <Container>
      <Head>
        
        <ButtonSignOut onPress={() => SignOutProfile()}>
          <Icon name="ios-power" size={25} color="#FFF" />
        </ButtonSignOut>

        <ContainerCenterHead>
          <TextName> {nome} </TextName>
        </ContainerCenterHead>
      </Head>

    </Container>
  );
}