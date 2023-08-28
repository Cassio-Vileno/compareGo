import React from 'react';
import {Modal, ModalProps} from 'react-native';

import {theme} from '../../../theme';
import {Icon} from '../../atoms/Icon';
import {Paragraph} from '../../atoms/Paragraph';
import {
  Body,
  BodyContainer,
  Button,
  ButtonFooter,
  Close,
  Container,
  Header,
  Overlay,
} from './style';

type ModalResultProps = ModalProps & {
  specifications: any;
  title?: string;
  action?: string;
  show: boolean;
  close: () => void;
};

export default function ModalResult({
  close,
  title,
  specifications,
  action,
  show,
  ...rest
}: ModalResultProps) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={show}
      statusBarTranslucent
      {...rest}>
      <Overlay>
        <Container>
          <Close onPress={() => close()}>
            <Icon name="x" size={theme.icon.size} color={theme.color.default} />
          </Close>
          <Body>
            <Header>
              <Paragraph weight="bold" size={18}>
                Produto mais barato
              </Paragraph>
            </Header>
            <BodyContainer>
              <Paragraph size={16}>
                Nome: {specifications?.bestProduct?.name}
              </Paragraph>
              <Paragraph size={16}>
                Quantidade:{specifications?.bestProduct?.amount}
                {specifications?.bestProduct?.medida}
              </Paragraph>
              <Paragraph size={16}>
                Valor: R${specifications?.bestProduct?.price}
              </Paragraph>
              <Paragraph size={16}>
                Valor por 100
                {specifications?.bestProduct?.medida == 'l' ? 'ml' : 'g'}: R$
                {specifications?.bestProduct?.price_100_measure}
              </Paragraph>
            </BodyContainer>
            <ButtonFooter>
              <Button onPress={() => close()}>
                <Paragraph color="#fff" size={20}>
                  Salvar
                </Paragraph>
              </Button>
            </ButtonFooter>
          </Body>
        </Container>
      </Overlay>
    </Modal>
  );
}
