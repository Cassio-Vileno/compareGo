import React from 'react';
import {Modal, ModalProps} from 'react-native';
import {
  ButtonGroup,
  Container,
  Content,
  Overlay,
  Title,
  CloseDialog,
} from './styles';
import {Paragraph} from '../../atoms/Paragraph';

export type DialogProps = ModalProps & {
  visible: boolean;
  title: string;
  buttonCloseText?: string;
  buttonConfirmText?: string;
  groupButtonDisposition?: 'row' | 'column';
  buttonConfirmPress?: () => void;
  buttonClosePress: () => void;
  buttonCloseDialog?: () => void;
};

export default function Dialog({
  visible,
  title,
  buttonCloseText,
  buttonClosePress,
  buttonConfirmPress,
  buttonConfirmText,
  buttonCloseDialog,
  groupButtonDisposition,
  ...rest
}: DialogProps): JSX.Element {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      statusBarTranslucent
      {...rest}>
      <Overlay>
        <Container>
          {buttonCloseDialog && (
            <CloseDialog onPress={buttonCloseDialog}>
              <Paragraph textAlign="right"></Paragraph>
            </CloseDialog>
          )}
          <Content>
            <Title>{title}</Title>
            <ButtonGroup
              style={{
                flexDirection: groupButtonDisposition || 'row',
              }}></ButtonGroup>
          </Content>
        </Container>
      </Overlay>
    </Modal>
  );
}
