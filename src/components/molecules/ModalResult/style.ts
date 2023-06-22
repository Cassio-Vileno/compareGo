import styled from 'styled-components/native';
import { theme } from '../../../theme';


export const Container = styled.View`
  width: 90%;
  min-height: 180px;
  max-height: 34%;
  position: relative;
  padding: 14px 14px ;
  justify-content: flex-start;
  border-radius: 12px;
  background-color: ${theme.color.primary};
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

export const Close = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-self: flex-end;
  top: 10px;
  right: 10px;
`;

export const Body = styled.View`
  width: 100%;
  align-items: center;
  padding: 14px 14px;
  position: relative;
`;

export const Header = styled.View`
  align-self: flex-start;
  padding: 0px 10px;
`;

export const BodyContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

export const ProductContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const ButtonFooter = styled.View`
  margin-top: 10%;
  align-self: center;
  width: 120px;
`;

export const IconContainer = styled.View`
  align-self: center;
  margin-right: 15px;
  margin-left: 15px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: #009688;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
