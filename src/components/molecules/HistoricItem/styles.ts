import styled from 'styled-components/native';
import {theme} from '../../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  padding-left: 15px;
  margin-top: 20px;
  align-items: center;
  background-color: #eaeaea;
  flex-direction: row;
`;

export const ContainerTitle = styled.View`
  max-width: 170px;
  height: 80px;
  justify-content: center;
`;

export const ContainerPrice = styled.View`
  max-width: 200px;
  height: 80px;
  padding-left: 20px;
  justify-content: center;
`;

export const ContainerMedida = styled.View`
  max-width: 170px;
  height: 80px;
  padding-left: 20px;
  justify-content: center;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #707070;
`;