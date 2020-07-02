import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { 
    Container, Title, InputForm, Button, TextButton,
    Header, ContainerInputs, ContainerPicker, PickerSelect,
    ContainerEndereco, InputNumero, InputEndereco,  ButtonReturn, 
} from './styles';

export default function ScreenEmpresa({ navigation }) {

 const[estado, setEstado] = useState('');
 const[cidade, setCidade] = useState('');
 const[especialidade, setEspecialidade] = useState('');
 return (
   <Container>
       <Header>
       <ImageBackground source={require('../../assets/almoco.jpg')} style={styles.image}>
        <ButtonReturn onPress={()=> navigation.navigate('ScreenEnpreendedor')}>
            <Icon name="ios-arrow-back" color="#000" size={30} />
        </ButtonReturn>

        <View style={{ alignItems:'center', justifyContent:'center', }}>
            <Title> Muito Bem! </Title>
            <Title> Agora Cadastre sua empresa </Title>
        </View>
        </ImageBackground>
       </Header>
        
        <InputForm placeholder="CNPJ" />
        <InputForm placeholder="Razão Social" />
        <InputForm placeholder="Nome Fantasia" />
        <InputForm placeholder="CEP" />
        <InputForm placeholder="Nome Fantasia" />
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

        <ContainerEndereco>
            <InputEndereco placeholder="Endereço" />
            <InputNumero placeholder="Número" />
        </ContainerEndereco>


        <Button>
            <TextButton> Cadastrar </TextButton>
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