import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container } from './styles';

export default function Card({ data }) {

 const[product, setProduct] = useState('');
 return (
   <Container>
       <Text> Produto: {data} </Text>
       <Icon name="fast-food" color='#333' size={30} />
   </Container>
  );
}