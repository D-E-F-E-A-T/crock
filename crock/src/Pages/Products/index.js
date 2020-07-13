import React, { useState } from 'react';
import {  FlatList, } from 'react-native';

import Card from '../../components/Card';
import { Container, Text, Head, Scroll, CenterView, } from './styles';

export default function Products() {
 
 const[produtos, setProdutos] = useState([
  {key:'1', produto:'Coxinha', estabelecimento: 'Dona Jôjo', taxa: 0 },
  {key:'2', produto:'Pastel', estabelecimento: 'Pastel de Belém', taxa:8.90 },
  {key:'3', produto:'Orelha', estabelecimento: 'Orelha seca', taxa:3 },
  {key:'4', produto:'Lanchão', estabelecimento: 'Lanche do Eddy', taxa:2 },
  {key:'5', produto:'Tapioca', estabelecimento: 'Tapioca de Mosqueiro', taxa:5 },
  {key:'6', produto:'Coxinha', estabelecimento: 'Coxinha da hora', taxa:8 },
  {key:'7', produto:'Pastel', estabelecimento: 'Pastel loko', taxa:7.90 },
  {key:'8', produto:'Caldo', estabelecimento: 'Caldo Quente', taxa:2.90 },
  {key:'9', produto:'Sucos', estabelecimento: 'Sucos & Sucos', taxa:3.90 },
  {key:'10', produto:'Pizza', estabelecimento: 'Forno top', taxa:4.90 },
 ]);
 return (
   <Container>
       <Head>

       </Head>
          <FlatList
            data={produtos}
            keyExtractor={(item)=> item.key}
            renderItem={({item})=> <Card data={item} />}
          />
   </Container>
  );
}