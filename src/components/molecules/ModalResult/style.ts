import styled from 'styled-components/native';
import { theme } from '../../../theme';
import { Normalize } from '../../../utils/normalize';


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
  padding: 14px 24px;
  position: relative;
`;

export const Header = styled.View`
  align-self: flex-start;
`;

export const BodyContainer = styled.View`
  align-items: flex-start;
  width: 100%;
`;


export const ButtonFooter = styled.View`
  margin-top: 10%;
  align-self: center;
  width: 120px;
`;

export const Button = styled.TouchableOpacity`
  height:  ${Normalize(40)}px;
  width: 100%;
  background-color: #009688;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
