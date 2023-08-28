import styled from 'styled-components/native';
import { Normalize } from '../../utils/normalize';

export const Container = styled.View`
  flex: 1;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 8%;
  background-color: #00BFA5;
  padding-left: 15px;
  align-items: flex-end;
  padding-bottom: 5px;
  justify-content: space-between;
  flex-direction: row;
`;

export const ImgLogo = styled.Image`
  width: ${Normalize(112)}px;
  height: ${Normalize(44)}px;
`;

export const ImgBanner = styled.Image`
  width: ${Normalize(325)}px;
  height: ${Normalize(95)}px;
`;

export const Body = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 10px 0 10px;
`;

export const Separation = styled.View`
  height: 10px;
`;

export const BannerContent = styled.View`
  height: ${Normalize(100)}px;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 13px 10px;
`;


export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: ${Normalize(40)}px;
  width: 50%;
  background-color: #009688;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ContainerList = styled.View`
  flex: 1;
  border-radius: 10px 10px 0 0;
  align-items: center;
  background-color: #00BFA5;
`;

export const HeaderContainerList = styled.View`
  width: 100%;
  height: ${Normalize(35)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 20px;
`;

export const ProductList = styled.ScrollView`
  width: 100%;
  height: 10px;
  border-radius: 10px 10px 0 0;
  padding: 0 10px 0 10px;
  background-color: white;
  padding-bottom: 10%;
`;
