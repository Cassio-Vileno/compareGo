import styled from 'styled-components/native';
import { theme } from '../../../theme';
import { Normalize } from '../../../utils/normalize';

export const Container = styled.View<any>`
  width:${Normalize(95)}px;;
  height: ${Normalize(theme.input.height)}px;
  border-radius: ${theme.input.borderRadius}px;
  background-color: ${theme.input.backgroundColor};
  justify-content: center;
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
