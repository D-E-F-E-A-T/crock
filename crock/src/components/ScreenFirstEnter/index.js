import React  from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { 
    Container, Button, TextButton, Title, 
} from './styles';

export default function ScreenFirstEnter({ navigation }) {

 return (
   <Container>
        
        <ImageBackground source={require('../../assets/almoco.jpg')} style={styles.image}>
            <Container>
                <Title> Opa! Tudo bem </Title>
                <Title> queremos saber quem é você? </Title>
                <Button onPress={()=> navigation.navigate('ScreenEnpreendedor')}>
                    <TextButton> Empreendedor </TextButton>
                </Button>

                <Button onPress={()=> navigation.navigate('SignIn')}>
                    <TextButton> Consumidor </TextButton>
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
        justifyContent: "center"
    }
});