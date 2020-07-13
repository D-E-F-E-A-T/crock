import React, {useState} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { 
    Container, TextDetails, CenterCard, ContainerText, TextEstab,
    TextEntrega, 
 } from './styles';

export default function Card({ data }) {
 
 const[taxa, setTaxa] = useState('Grátis');

 function loadTaxa(){
     let tx = data.taxa
     setTaxa(tx.toFixed(2));
     return taxa;
 }
 return (
   <Container>
       <CenterCard>
        <ContainerText>
            <TextEstab> {data.estabelecimento} </TextEstab>
            <TextDetails> Produto: {()=> loadTaxa()} </TextDetails>
            
        </ContainerText>
        <TextEntrega> Taxa Entrega: {data.taxa} </TextEntrega>
        <Icon name="fast-food" color="#333" size={20} />
       </CenterCard>
   </Container>
  );
}