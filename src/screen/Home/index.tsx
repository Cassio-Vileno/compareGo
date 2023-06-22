import {
  BannerContent,
  Body,
  Container,
  Header,
  IconContainer,
  ImgBanner,
  ImgLogo,
  LabelContent,
  Separation,
} from './styles';
import LogoHeader from '../../assets/LogoHeader.png';
import Banner from '../../assets/Banner.png';
import {Paragraph} from '../../components/atoms/Paragraph';
import {FormVolume} from '../../components/organims/FormVolume';
import {FormMassa} from '../../components/organims/FormMassa';
import {Icon} from '../../components/atoms/Icon';

export const Home = (): JSX.Element => {
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
        <LabelContent>
          <Paragraph>Calcular por Volume</Paragraph>
        </LabelContent>
        <FormVolume />
        <LabelContent>
          <Paragraph>Calcular por Massa</Paragraph>
        </LabelContent>
        <FormMassa />
        <Separation />
      </Body>
    </Container>
  );
};
