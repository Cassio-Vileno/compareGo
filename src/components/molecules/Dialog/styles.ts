import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background: rgba(48, 48, 48, 0.3);
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View<{height?: number}>`
  width: 90%;
  min-height: 250px;
  padding: 12px;
  background-color: white;
  border-radius: 12px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ButtonGroup = styled.View`
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin: 22px 0;
`;

export const Subtitle = styled.Text`
  font-weight: 400;
  font-size: 13px;
  color: #454a50;
  text-align: center;
  margin: 20px 0;
`;

export const CloseDialog = styled.TouchableOpacity`
  align-items: flex-end;
`;
