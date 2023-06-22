import styled from 'styled-components/native';
import {InputProps} from '.';
import {theme} from '../../../theme';

export const Container = styled.TextInput<InputProps>`
  width: ${theme.input.width}%;
  height: 50px;
  padding-left: 10px;
  background-color: ${theme.input.backgroundColor};
  border-radius: ${theme.input.borderRadius}px;
  border-width: 1px;
  border-color: ${props =>
    props.error && props.touched 
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default};
  border-width: 1px;
`;

export const Error = styled.Text`
  width: ${theme.input.width}px;
  color: ${theme.input.errorColor};
  text-align: left;
`;
