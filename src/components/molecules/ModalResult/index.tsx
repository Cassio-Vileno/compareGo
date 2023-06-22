import React from 'react';
import {Modal, ModalProps} from 'react-native';

import {
  Body,
  BodyContainer,
  Button,
  ButtonFooter,
  Close,
  Container,
  ContainerText,
  Header,
  IconContainer,
  Overlay,
  ProductContainer,
} from './style';
import {Paragraph} from '../../atoms/Paragraph';
import {theme} from '../../../theme';
import {Icon} from '../../atoms/Icon';

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
              <Paragraph weight="bold" size={20}>
                {title}
              </Paragraph>
            </Header>
            <BodyContainer>
              <ProductContainer>
                <Paragraph style={{paddingBottom: 10}} weight="bold" size={19}>{specifications.title_1}</Paragraph>
                <ContainerText>
                  <Paragraph size={16}>Valor:</Paragraph>
                  <Paragraph size={16}>R${specifications.price_1}</Paragraph>
                </ContainerText>
                <Paragraph size={16}>
                  {specifications.medida_product_1}
                  {specifications.medida_1}
                </Paragraph>
                <ContainerText>
                  <Paragraph size={16}>{specifications.textPrice} </Paragraph>
                  <Paragraph size={16}>
                    R${specifications.price_100_product_1}
                  </Paragraph>
                </ContainerText>
              </ProductContainer>
              <IconContainer>
                <Icon
                  name="x"
                  size={theme.icon.size}
                  color={theme.color.secondary}
                />
              </IconContainer>
              <ProductContainer>
                <Paragraph style={{paddingBottom: 10}} weight="bold" size={19}>{specifications.title_2}</Paragraph>
                <ContainerText>
                  <Paragraph size={16}>Valor:</Paragraph>
                  <Paragraph size={16}>R${specifications.price_2}</Paragraph>
                </ContainerText>
                <Paragraph size={16}>
                  {specifications.medida_product_2}
                  {specifications.medida_2}
                </Paragraph>
                <ContainerText>
                  <Paragraph size={16}>{specifications.textPrice} </Paragraph>
                  <Paragraph size={16}>
                    R${specifications.price_100_product_2}
                  </Paragraph>
                </ContainerText>
              </ProductContainer>
            </BodyContainer>
            <ButtonFooter>
              <Button onPress={() => close()}>
                <Paragraph size={20}>Voltar</Paragraph>
              </Button>
            </ButtonFooter>
          </Body>
        </Container>
      </Overlay>
    </Modal>
  );
}
