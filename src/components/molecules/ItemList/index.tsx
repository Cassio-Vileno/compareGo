import React, {useEffect, useState} from 'react';
import {Container, ContainerPrice, ContainerTitle, Delete} from './styles';
import {Paragraph} from '../../atoms/Paragraph';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {Icon} from '../../atoms/Icon';
import {dataTypes} from '../../../screen/Home';

type itemListProps = {
  id: string;
  name: string;
  price: any;
  amount: number;
  medida: string;
  measure: string;
  handleRefresh: () => void;
};

export default function ItemList({
  id,
  name,
  price,
  amount,
  medida,
  measure,
  handleRefresh
}: itemListProps): JSX.Element {
  const {getItem, setItem} = useAsyncStorage(`@comparego:products_${measure}`);
  const handleRemove = async () => {
    try {
      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];
      const data = previousData.filter((item: dataTypes) => item.id !== id);
      await setItem(JSON.stringify(data));
      handleRefresh()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ContainerTitle>
        <Paragraph weight="bold" size={18}>
          {name}
        </Paragraph>
        <Paragraph size={16}>
          Volume: {amount}
          {medida}
        </Paragraph>
      </ContainerTitle>
      <ContainerPrice>
        <Paragraph size={16}>Valor: R${price}</Paragraph>
      </ContainerPrice>
      <Delete onPress={() => handleRemove()}>
        <Icon name="trash-2" />
      </Delete>
    </Container>
  );
}
