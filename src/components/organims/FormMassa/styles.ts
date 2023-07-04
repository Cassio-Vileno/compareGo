import styled from 'styled-components/native';

export const FormContainer = styled.View`
  width: 100%;
  height: 155px;
  border-radius: 15px;
  padding: 18px 10px 0 17px;
`;

export const ConatinerValue = styled.View`
  width: 100%;
  flex-direction: row;
  padding-right: 10%;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerVolume = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 20px;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 60px;
  align-items: center;
  padding-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 50%;
  background-color: #009688;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
