import React from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { 
    Container, Input, TextButton, Button, Form,
    Title, CantainerForm, TextFooter, TextSignUp,
    ContainerTextButton, Footer, 
 } from './styles';

export default function SignIn({ navigation }) {
 return (
   <Container>
       <CantainerForm>
        <Form>
            <Title> Login </Title>
            <Input
                placeholder="Usuário"
            />

            <Input
                placeholder="Senha"
            />

            <Button onPress={()=> navigation.navigate("Tabs")}>
                <ContainerTextButton>
                    <TextButton> Login </TextButton>
                    <Icon name="ios-arrow-round-forward" color="#FFF" size={20} />
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