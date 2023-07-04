import {
  BannerContent,
  Body,
  Container,
  ContainerList,
  Header,
  ImgBanner,
  ImgLogo,
  LabelContent,
  ProductList,
  Separation,
} from './styles';
import LogoHeader from '../../assets/LogoHeader.png';
import Banner from '../../assets/Banner.png';
import {Paragraph} from '../../components/atoms/Paragraph';
import {FormMassa} from '../../components/organims/FormMassa';
import {Icon} from '../../components/atoms/Icon';
import InputPicker from '../../components/atoms/InputPicker';
import { useState } from 'react';
import { measurements } from '../../utils/medidas';
import { FormVolume } from '../../components/organims/FormVolume';

export const Home = (): JSX.Element => {
  const [measure, setMeasure] = useState()

  return (
    <Container>
      <Header>
        <ImgLogo source={LogoHeader} />
      </Header>
      <Body>
        <BannerContent>
          <Paragraph
            color="#FFFFFF"
            weight="medium"
            textAlign="center"
            size={20}>
            Com o CompareGo {'\n'} pode comparar os preços {'\n'} e sempre pagar
            menos
          </Paragraph>
          <ImgBanner source={Banner} />
        </BannerContent>
        <InputPicker
              style={{width: 210}}
              items={measurements}
              value={measure}
              onChangeText={setMeasure}
              onChange={(e: any) => setMeasure(e)}
            />
        <LabelContent>
        </LabelContent>
        { measure  !== 'volume' ? (
            <FormVolume />
          ) : (
            <FormMassa/>
        )}
        <Separation/>
      </Body>
        <ContainerList>
            <Paragraph style={{paddingBottom: 10, paddingTop: 10}} size={20} >Lista de itens</Paragraph>
          <ProductList>
            <Separation />
          </ProductList>
        </ContainerList>
    </Container>
  );
};
