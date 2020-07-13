import React from 'react';
import { View } from 'react-native';

import Card from '../../components/Card';
import { Container, Text, Head, Scroll, CenterView, } from './styles';

export default function Products() {
 return (
   <Container>
       <Head>

       </Head>

       <Scroll>
         <CenterView>
          <Card data="Coxinha" />
          <Card data="Coxinha" />
          <Card data="Coxinha" />
          <Card data="Coxinha" />
          <Card data="Coxinha" />
          <Card data="Coxinha" />
          <Card data="Coxinha" />
          <Card data="Coxinha" />
         </CenterView>
       </Scroll>
   </Container>
  );
}