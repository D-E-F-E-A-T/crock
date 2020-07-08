import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../../services/firebaseConnection/';

import { 
    Container, Input, TextButton, Button, Form,
    Title, CantainerForm, TextFooter, TextSignUp,
    ContainerTextButton, Footer, ButtonReturn, 
 } from './styles';

export default function SignIn({ navigation }) {

 const[email, setEmail] = useState('');
 const[password, setPassword] = useState('');

 async function AcessApp(){
    if(email !== '' && password !== ''){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            alert(error.code);
        });
    }
 }
 return (
   <Container>
        <ButtonReturn onPress={()=> navigation.navigate("ScreenFirstEnter")}>
            <Icon style={{ margin: 10,  }} name="arrow-left" color="#FFF" size={40} />
        </ButtonReturn>
       <CantainerForm>
        <Form>
        
            <Title> Login </Title>
            <Input
                placeholder="E-mail"
                value={email}
                onChangeText={(email)=> setEmail(email)}
            />

            <Input
                placeholder="Senha"
                value={password}
                onChangeText={(password)=> setPassword(password)}
            />

            <Button onPress={()=> AcessApp()}>
                <ContainerTextButton>
                    <TextButton> Login </TextButton>
                    <Icon name="arrow-right" color="#FFF" size={20} />
                </ContainerTextButton>
            </Button>
            
            
        </Form>

        
       </CantainerForm>
        
        <Footer>
        <Button onPress={()=> navigation.navigate("SignUp") }>
            <TextFooter> Ainda não possui conta?  <TextSignUp> Criar Conta </TextSignUp> </TextFooter>
        </Button>
        </Footer>
   </Container>
  );
}

const styles = StyleSheet.create({
    image: {
        // flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.6,
        width:'90%',
    }
});