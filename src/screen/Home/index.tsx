import {
  BannerContent,
  Body,
  Button,
  ButtonContainer,
  Container,
  ContainerList,
  Header,
  HeaderContainerList,
  ImgBanner,
  ImgLogo,
  ProductList,
  Separation,
} from './styles';
import LogoHeader from '../../assets/LogoHeader.png';
import Banner from '../../assets/banner.png';
import {Paragraph} from '../../components/atoms/Paragraph';
import {FormMassa} from '../../components/organims/FormMassa';
import InputPicker from '../../components/atoms/InputPicker';
import {useEffect, useState} from 'react';
import {measurements} from '../../utils/medidas';
import {FormVolume} from '../../components/organims/FormVolume';
import ItemList from '../../components/molecules/ItemList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {calculeVolume} from '../../utils/calculeVolume';
import ModalResult from '../../components/molecules/ModalResult';
import {Normalize} from '../../utils/normalize';
import {useDialog} from '../../contexts/dialog.context';
import {calculeMassa} from '../../utils/calculeMassa';

export type dataTypes = {
  id: string;
  name: string;
  price_100_measure: number;
  amount_convert: number;
  price: any;
  amount: number;
  medida: string;
};

export const Home = (): JSX.Element => {
  const [measure, setMeasure] = useState('volume');
  const [showModal, setShowModal] = useState(false);
  const [specifications, setSpecifications] = useState([]);
  const {openDialog} = useDialog();
  const [data, setData] = useState([]);

  const onGetItem = async () => {
    if (measure === 'volume') {
      const response = await AsyncStorage.getItem('@comparego:products_volume');
      const previousData = response ? JSON.parse(response) : [];
      setData(previousData);
    } else {
      const response = await AsyncStorage.getItem('@comparego:products_massa');
      const previousData = response ? JSON.parse(response) : [];
      setData(previousData);
    }
  };

  const handleCalculate = async () => {
    if (measure === 'volume') {
      const res = calculeVolume(data);
      const bestProduct = (await res).bestProduct;
      const values = (await res).values;
      openDialog({
        title: 'Senha alterada com sucesso!',
        buttonCloseText: 'fechar',
        specifications: {bestProduct, values},
      });
    } else {
      const res = calculeMassa(data);
      const bestProduct = (await res).bestProduct;
      const values = (await res).values;
      openDialog({
        title: 'Senha alterada com sucesso!',
        buttonCloseText: 'fechar',
        specifications: {bestProduct, values},
      });
    }
  };

  const ClearAll = async () => {
    if (measure === 'volume') {
      await AsyncStorage.removeItem('@comparego:products_volume');
    } else {
      await AsyncStorage.removeItem('@comparego:products_massa');
    }
    onGetItem();
  };

  useEffect(() => {
    onGetItem();
  }, [measure]);

  return (
    <Container>
      <Header>
        <ImgLogo source={LogoHeader} />
      </Header>
      <Body>
        <BannerContent>
          <ImgBanner source={Banner} />
        </BannerContent>
        <InputPicker
          style={{width: Normalize(200), marginLeft: 13}}
          items={measurements}
          value={measure}
          onChangeText={setMeasure}
          onChange={(e: any) => setMeasure(e)}
        />
        {measure === 'volume' ? (
          <FormVolume handleRefresh={() => onGetItem()} />
        ) : (
          <FormMassa handleRefresh={() => onGetItem()} />
        )}
        <Separation />
        <KeyboardAvoidingView style={{flex: 1}}>
          <ContainerList>
            <HeaderContainerList>
              <Paragraph
                style={{paddingBottom: 10, paddingTop: 10}}
                size={Normalize(13)}>
                Lista dos itens
              </Paragraph>
              <TouchableOpacity onPress={() => ClearAll()}>
                <Paragraph color="#aa0101" size={Normalize(13)}>
                  Excluir tudo
                </Paragraph>
              </TouchableOpacity>
            </HeaderContainerList>
            <ProductList>
              {data.map((item: dataTypes) => (
                <ItemList
                  handleRefresh={() => onGetItem()}
                  key={item.id}
                  id={item.id}
                  amount={item.amount}
                  medida={item.medida}
                  name={item.name}
                  price={item.price}
                  measure={measure}
                />
              ))}
            </ProductList>
          </ContainerList>
          <ButtonContainer>
            <Button onPress={() => handleCalculate()}>
              <Paragraph color="#fff" size={20}>
                Calcular
              </Paragraph>
            </Button>
          </ButtonContainer>
        </KeyboardAvoidingView>
      </Body>
    </Container>
  );
};
