import React, {useState} from 'react';
import {TextInputProps, View} from 'react-native';
import {Picker, PickerProps} from '@react-native-picker/picker';
import {Container, Error} from './styles';
import {Paragraph} from '../Paragraph';

type Item = {
  label: string;
  value: string;
};

export type FormFieldSelectProps = PickerProps & {
  items: Item[];
  placeholder?: string;
  value?: string;
  onChangeText?: any;
  onChange?: any;
  touched?: any;
  error?: any;
};

export default function FormFieldSelect({
  items,
  error,
  touched,
  onChangeText,
  value,
  ...rest
}: FormFieldSelectProps): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(value);

  return (
    <Container error={error} touched={touched} {...rest}>
      <Paragraph size={13}>{rest.placeholder}</Paragraph>
      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedItem(itemValue);
          onChangeText(itemValue);
        }}
        style={{color: '#000000'}}>
        {items.map((item: Item) => (
          <Picker.Item
            label={item.label}
            value={item.value}
            key={Math.random()}
            style={{color: '#000000'}}
          />
        ))}
      </Picker>
    </Container>
  );
}
