import styled from 'styled-components/native';
import {theme} from '../../../theme';

export const Container = styled.View<any>`
  width: 100px;
  height: ${theme.input.height}px;
  border-radius: 15px;
  background-color: ${theme.input.backgroundColor};
  justify-content: flex-end;
`;

export const Error = styled.Text`
  color: ${theme.input.errorColor};
  padding-left: 3px;
`;
