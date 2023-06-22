import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {IconProps} from 'react-native-vector-icons/Icon';
import {theme} from '../../../theme';

export function Icon(props: IconProps) {
  return <Feather {...props} size={props.size || theme.icon.size} />;
}
