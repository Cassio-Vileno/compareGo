import React from 'react';
import {TextProps} from 'react-native';
import {Container} from './styles';

export type ParagraphProps = TextProps & {
  size?: number;
  color?: string;
  weight?: string;
  textAlign?: string;
};

export function Paragraph({children, ...rest}: ParagraphProps): JSX.Element {
  return <Container {...rest}>{children}</Container>;
}
