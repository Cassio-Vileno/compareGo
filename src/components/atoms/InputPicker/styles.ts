import styled from 'styled-components/native';
import {theme} from '../../../theme';

export const Container = styled.View<any>`
  width: 100px;
  height: ${theme.input.height}px;
  border-radius: ${theme.input.borderRadius}px;
  background-color: ${theme.input.backgroundColor};
  justify-content: flex-end;
  border-width: 1px;
  border-color: ${props =>
    props.error && props.touched 
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default};
`;

export const Error = styled.Text`
  color: ${theme.input.errorColor};
  padding-left: 3px;
`;
