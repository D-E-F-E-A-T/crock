import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../../services/firebaseConnection/';

import { 
  Container, Text, Head,ContainerCenterHead, ButtonSignOut, 
} from './styles';

export default function Profile({ navigation }) {

  function SignOutProfile(){
    return firebase.auth().signOut();
  }
 return (
    <Container>
      <Head>
        
        <ButtonSignOut onPress={() => SignOutProfile()}>
          <Icon name="ios-power" size={30} color="#FFF" />
        </ButtonSignOut>

        <ContainerCenterHead>
          <Text> Marcelo </Text>
        </ContainerCenterHead>
      </Head>
      <Text> Perfil </Text>
    </Container>
  );
}