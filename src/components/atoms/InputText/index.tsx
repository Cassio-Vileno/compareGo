import React from 'react';
import {TextInputProps, View} from 'react-native';
import {theme} from '../../../theme';
import {Container, Error} from './styles';
import {Paragraph} from '../Paragraph';

export type InputProps = TextInputProps & {
  error: any;
  onChangeText: any;
  placeholder?: string;
  touched?: any
};

export default function InputText({
  error,
  onChangeText,
  placeholder,
  touched,
  ...rest
}: InputProps) {
  return (
    <View>
      <Paragraph size={13}>{placeholder}</Paragraph>
      <Container
        error={error}
        selectionColor={theme.input.colorPlaceholder}
        cursorColor={theme.input.colorPlaceholder}
        keyboardType={'email-address'}
        onChangeText={onChangeText}
        placeholder=""
        touched={touched}
        {...rest}
      />
      <Error>{error?.message}</Error>
    </View>
  );
}
