import styled from 'styled-components/native';
import { Normalize } from '../../../utils/normalize';

export const FormContainer = styled.View`
  width: 100%;
  height: ${Normalize(140)}px;
  border-radius: 15px;
  padding: 18px 10px 0 17px;
`;

export const ConatinerValue = styled.View`
  width: 100%;
  flex-direction: row;
  padding-right: 10%;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerVolume = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 20px;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: ${Normalize(40)}px;
  align-items: center;
  justify-content: flex-start;
`;

export const Button = styled.TouchableOpacity`
  height: ${Normalize(35)}px;
  width: 50%;
  background-color: #009688;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
