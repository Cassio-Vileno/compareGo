import styled from 'styled-components/native';
import {ParagraphProps} from '.';
import {theme} from '../../../theme';

export const Container = styled.Text<ParagraphProps>`
  width: ${theme.paragraph.width};
  font-size: ${props => props.size || theme.paragraph.size}px;
  color: ${props => props.color || theme.paragraph.color.default};
  font-weight: ${props => props.weight || 'normal'};
  ${props => props.textAlign && `text-align: ${props.textAlign}`};
`;
