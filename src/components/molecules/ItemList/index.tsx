import React, { useEffect, useState} from 'react';
import {Container, ContainerPrice, ContainerTitle, Delete} from './styles';
import {Paragraph} from '../../atoms/Paragraph';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '../../atoms/Icon';

export default function ItemList(): JSX.Element {
  return (
      <Container>
        <ContainerTitle>
          <Paragraph weight='bold' size={20}>Detergente ype</Paragraph>
          <Paragraph size={16}>Volume: 600ml</Paragraph>
        </ContainerTitle>
        <ContainerPrice>
          <Paragraph size={16}>Valor: R$2,56</Paragraph>
        </ContainerPrice>
        <Delete onPress={() => console.log("oii")}>
          <Icon name='trash-2' />
        </Delete>
      </Container>
  );
}
