import styled from 'styled-components/native';
import {InputProps} from '.';
import {theme} from '../../../theme';

export const Container = styled.View`
  margin: -6px;
`;

export const TextInput = styled.TextInput<InputProps>`
  width: ${theme.input.width}%;
  height: ${theme.input.height}px;
  padding-left: 10px;
  background-color: ${theme.input.backgroundColor};
  border-radius: ${theme.input.borderRadius}px;
  border-width: 1px;
  border-color: ${props =>
    props.error && props.touched 
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default};
`;

export const Error = styled.Text`
  width: ${theme.input.width}px;
  color: ${theme.input.errorColor};
  text-align: left;
`;
