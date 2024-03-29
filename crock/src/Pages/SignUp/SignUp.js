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

 firebase.auth().signOut();
async function cadastrarUsuario(){
    if(nome !== '' && cpf !== '' && telefone !== '' && senha !== '' ){
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
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
             value={nome}
             onChangeText={(nome) => setNome(nome)}
         />

         <Input
             placeholder="CPF"
             value={cpf}
             onChangeText={(cpf) => setCpf(cpf)}
         />

        <Input
             placeholder="Telefone"
             value={telefone}
             onChangeText={(telefone) => setTelefone(telefone)}
         />

        <Input
             placeholder="E-mail"
             value={email}
             onChangeText={(email) => setEmail(email)}
         />

        <Input
             placeholder="Senha"
             value={senha}
             onChangeText={(senha) => setSenha(senha)}
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