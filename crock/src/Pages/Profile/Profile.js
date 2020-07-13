import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../../services/firebaseConnection/';

import { 
  Container, Text, Head,ContainerCenterHead, ButtonSignOut, 
} from './styles';

export default function Profile({ navigation }) {

  const[nome, setNome] = useState('');
  useEffect(() => {
    let uid = firebase.auth().currentUser.uid;

    
  },[]);

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
          <Text> {nome} </Text>
        </ContainerCenterHead>
      </Head>
      <Text> Perfil </Text>
    </Container>
  );
}