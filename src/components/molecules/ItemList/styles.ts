import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  border-radius: 8px;
  padding-left: 15px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  flex-direction: row;
`;

export const ContainerTitle = styled.View`
  max-width: 250px;
  min-width: 80px;
  height: 80px;
  justify-content: center;
`;

export const ContainerPrice = styled.View`
  min-width: 120px;
  height: 45px;
  justify-content: flex-end;
`;
export const Delete = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: flex-end;
  padding-right: 15px;
`;