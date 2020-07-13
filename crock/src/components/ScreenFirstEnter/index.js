import React  from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { 
    Container, Button, TextButton, Title, ContainerTitle,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ScreenFirstEnter({ navigation }) {

 return (
   <Container>
        
        <ImageBackground source={require('../../assets/almoco.jpg')} style={styles.image}>

            <ContainerTitle>
                <Title> Opa! Tudo bem </Title>
                <Title> Seja Bem-vindo ao Crock! </Title>
            </ContainerTitle>
            <Container>
                
                
                <Button onPress={()=> navigation.navigate('SignIn')}>
                    <TextButton> Acessar </TextButton>
                </Button>

                <Button style={{backgroundColor:'#DB4A39'}} >
                    <TextButton> <Icon name="logo-google" color="#FFB333" size={30}/> Acessar com Google  </TextButton>
                </Button>

                <Button style={{backgroundColor:'#3B5998'}} >
                    <TextButton> <Icon name="logo-facebook" color="#FFB333" size={30}/> Acessar com Facebook  </TextButton>
                </Button>
            </Container>
        </ImageBackground>
       
   </Container>
  );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width:'100%',
    }
});