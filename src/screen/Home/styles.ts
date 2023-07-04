import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 85px;
  background-color: #00BFA5;
  padding-left: 15px;
  align-items: flex-end;
  padding-bottom: 5px;
  justify-content: space-between;
  flex-direction: row;
`;

export const ImgLogo = styled.Image`
  width: 112px;
  height: 58px;
`;

export const ImgBanner = styled.Image`
  width: 160px;
  height: 100%;
`;

export const Body = styled.ScrollView`
  flex: 1;
  padding: 20px 10px 0 10px;
`;

export const Separation = styled.View`
  height: 5px;
`;

export const BannerContent = styled.View`
  height: 130px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #009688;
  border-radius: 15px;
  margin-bottom: 13px;
`;

export const FormContainer = styled.View`
  width: 100%;
  height: 280px;
  border-radius: 15px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const FormContent = styled.View`
  height: 100%;
  width: 50%;
  padding: 18px 0 0 17px;
`;

export const LabelContent = styled.View`
  height: 10px;
  align-items: flex-end;
`;

export const ConatinerValue = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.View`
  width: 1px;
  background-color: #C2BDBD;
  height: 60%;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 50%;
  background-color: #009688;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ContainerList = styled.View`
  flex: 1;
  border-radius: 20px 20px 0 0;
  align-items: center;
  background-color: #00BFA5;
`;

export const ProductList = styled.ScrollView`
  width: 99%;
  height: 10px;
  border-radius: 10px;
  background-color: white;
`;
