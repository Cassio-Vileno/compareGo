import React, { useEffect, useState} from 'react';
import {Container, ContainerMedida, ContainerPrice, ContainerTitle, Line} from './styles';
import {Paragraph} from '../../atoms/Paragraph';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoricItem(): JSX.Element {

  let data = {}
  
  useEffect(() => {
    (async () => {
      const keys = await AsyncStorage.getAllKeys();
      keys.map(async item => {
        const historicStoraged = await AsyncStorage.getItem(item);
        data = {...data, historicStoraged}
      })
    })();
  }, []);
  return (
      <Container>
        <ContainerTitle>
          <Paragraph size={16}>Detergente ype</Paragraph>
          <Line />
          <Paragraph size={16}>Detergente minuano</Paragraph>
        </ContainerTitle>
        <ContainerMedida>
          <Paragraph size={16}>Volume: 600ml</Paragraph>
          <Line />
          <Paragraph size={16}>Volume: 600ml</Paragraph>
        </ContainerMedida>
        <ContainerPrice>
          <Paragraph size={16}>Custo por 100ml: R$0,56</Paragraph>
          <Line />
          <Paragraph size={16}>Custo por 100ml: R$0,46</Paragraph>
        </ContainerPrice>
      </Container>
  );
}
