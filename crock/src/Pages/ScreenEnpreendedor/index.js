import React, { useState } from 'react';
import { 
    View, ImageBackground, StyleSheet, ActivityIndicator, 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../../services/firebaseConnection';

import { 
    Container, Title, InputForm, Button, TextButton,
    Header, ContainerInputs, ContainerPicker, PickerSelect,
    ContainerEndereco, InputNumero, InputEndereco, ButtonReturn, 
} from './styles';

export default function ScreenEnpreendedor({ navigation }) {

 const[estado, setEstado] = useState('');
 const[cidade, setCidade] = useState('');
 const[especialidade, setEspecialidade] = useState('');
 const[email, setEmail] = useState('');
 const[nome, setNome] = useState('');
 const[telefone, setTelefone] = useState('');
 const[endereco, setEndereco] = useState('');
 const[numero, setNumero] = useState('');
 const[cpf, setCpf] = useState('');
 const[password, setPassword] = useState('');

 async function cadastrarEmpreendedor(){
     if(nome !== '' && password !== '' &&cpf !== '' && telefone !== '' && email !== '' && endereco !== '' && numero !== ''){
         await firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(async () => {
             let uid = firebase.auth().currentUser.uid;

             await firebase.database().ref('empreendedor').child(uid).set({
                nome: nome,
                password: password,
                email: email,
                estado: estado,
                cidade: cidade,
                especialidade: especialidade,
                telefone: telefone,
                endereco: endereco,
                numero: numero,
                cpf: cpf
             });

             navigation.navigate('ScreenEmpresa');
         }).catch((error) => {
             alert(error.code);
         });
         
     }
 }
 return (
   <Container>
       <Header>
       <ImageBackground source={require('../../assets/almoco.jpg')} style={styles.image}>
        <ButtonReturn onPress={()=> navigation.navigate('ScreenFirstEnter')}>
            <Icon name="ios-arrow-back" color="#000" size={30} />
        </ButtonReturn>

        <View style={{ alignItems:'center', justifyContent:'center', }}>
            <Title> Bem-Vindo </Title>
            <Title> Empreendedor </Title>
        </View>
        </ImageBackground>
       </Header>
        <ContainerInputs>

            <ContainerPicker>
                <PickerSelect
                    selectedValue={estado}
                    onValueChange={(itemValue, itemIndex) => setEstado(itemValue)}
                >
                    <PickerSelect.Item label="Pará" value='para' />
                    <PickerSelect.Item label="Amazonas" value='amazonas' />
                    <PickerSelect.Item label="Ceará" value='ceara' />
                    <PickerSelect.Item label="Recife" value='Recife' />
                </PickerSelect>
            </ContainerPicker>

            <ContainerPicker>
                <PickerSelect
                    selectedValue={cidade}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setCidade(itemValue)}
                >
                    <PickerSelect.Item label="Belém" value='belem' />
                    <PickerSelect.Item label="Manaus" value='manaus' />
                    <PickerSelect.Item label="Fortaleza" value='fortaleza' />
                    <PickerSelect.Item label="Pernanbuco" value='pernambuco' />
                </PickerSelect>
            </ContainerPicker>
        </ContainerInputs>
        <InputForm 
        placeholder="Nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
        />
        <InputForm 
        placeholder="E-mail"
        value={email}
        onChangeText={(email) => setEmail(email)}
        />
        <InputForm 
        placeholder="CPF"
        value={cpf}
        onChangeText={(cpf) => setCpf(cpf)}
        />
        <InputForm 
        placeholder="Telefone"
        value={telefone}
        onChangeText={(telefone) => setTelefone(telefone)}
        />

        <InputForm 
        placeholder="Senha"
        value={password}
        onChangeText={(password) => setPassword(password)}
        />

        <ContainerEndereco>
            <InputEndereco 
            placeholder="Endereço"
            value={endereco}
            onChangeText={(endereco) => setEndereco(endereco)}
            />
            <InputNumero
            placeholder="Número"
            value={numero}
            onChangeText={(numero) => setNumero(numero)}
            />
        </ContainerEndereco>

        <ContainerPicker  style={{ width: '90%', }}>
            <PickerSelect
             style={{ width: '90%', }}
                selectedValue={especialidade}
                onValueChange={(itemValue, itemIndex) => setEspecialidade(itemValue)}
            >
                <PickerSelect.Item label="Especialidade" value='' />
                <PickerSelect.Item label="Pizza" value='pizza' />
                <PickerSelect.Item label="Coxinha" value='coxinha' />
                <PickerSelect.Item label="Pães e Massas" value='paes_e_massas' />
                <PickerSelect.Item label="Pastel" value='pastel' />
                <PickerSelect.Item label="Doces" value='doces' />
                <PickerSelect.Item label="Tapioca" value='tapioca' />
                <PickerSelect.Item label="Vegana" value='vegana' />
                <PickerSelect.Item label="Vegetariana" value='vegetariana' />
                <PickerSelect.Item label="fast-food" value='fast_food' />
                <PickerSelect.Item label="food-truck" value='food_truck' />
                <PickerSelect.Item label="Comida Paraense" value='comida_paraense' />
                <PickerSelect.Item label="Comida Paranaense" value='comida_paranaense' />
                <PickerSelect.Item label="Comida Bahiana" value='comida_bahiana' />
                <PickerSelect.Item label="Comida Carioca" value='Comida_carioca' />
                <PickerSelect.Item label="Comida Paulista" value='comida_paulista' />
                <PickerSelect.Item label="Comida Árabe" value='comida_arabe' />
                <PickerSelect.Item label="Comida Chinesa" value='comida_chinesa' />
                <PickerSelect.Item label="Comida Japonesa" value='comida_japonesa' />
                <PickerSelect.Item label="Comida Tailandesa" value='comida_tailandesa' />
                <PickerSelect.Item label="Comida Gaúcha" value='comida_gaucha' />
            </PickerSelect>
        </ContainerPicker>

        <Button onPress={() => cadastrarEmpreendedor()}>
            <TextButton> Próximo </TextButton>
            <Icon name="ios-arrow-forward" color="#FFF" size={20} />
        </Button>
   </Container>
  );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.6,
    }
});