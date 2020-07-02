import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../../services/firebaseConnection';

import { View } from 'react-native';

import { 
    Container, Input, TextButton, Button, Form,
    Title, CantainerForm, ContainerTextButton, Header, 
 } from './styles';

export default function SignUp({ navigation }) {

 const[nome, setNome] = useState('');
 const[cpf, setCpf] = useState('');
 const[telefone, setTelefone] = useState('');
 const[email, setEmail] = useState('');
 const[senha, setSenha] = useState('');

//  firebase.auth().signOut();
async function cadastrarUsuario(){
    if(nome !== '0' && cpf !== '' && telefone !== '' && senha !== '' ){
        await firebase.auth().currentUserWithEmailAndPassword(email, senha)
        .then( async () => {
            let uid = firebase.auth().currentUser.uid;

            await firebase.database().ref('users').child(uid).set({
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                email: email,
                senha: senha
            });
        }).catch((error) => {
            alert(error.code);
        });
    }
}
 


 return (
    <Container>
    
    <Header>
    <Button onPress={()=> navigation.navigate("SignIn")}>
        <Icon style={{ margin: 10,  }} name="arrow-left" color="#FFF" size={40} />
    </Button>
    </Header>
    <CantainerForm>
     <Form>
         <View style={{ flexDirection:'row', alignItems:'center' }}>
            <Icon name="account" color="#FFF" size={25} />
            <Title> Criar Conta </Title>
         </View>

         <Input
             placeholder="Nome"
         />

         <Input
             placeholder="CPF"
         />

        <Input
             placeholder="Telefone"
         />

        <Input
             placeholder="E-mail"
         />

        <Input
             placeholder="Senha"
         />

         <Button onPress={() => cadastrarUsuario()}>
             <ContainerTextButton>
                 <TextButton> Cadastrar </TextButton>
                 <Icon name="arrow-right" color="#FFF" size={20} />
             </ContainerTextButton>
         </Button>

         

         
     </Form>

     
    </CantainerForm>
</Container>
  );
}