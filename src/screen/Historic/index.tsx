import {
  BannerContent,
  Body,
  Container,
  Header,
  ImgBanner,
  ImgLogo,
  LabelContent,
  Separation,
} from './styles';
import LogoHeader from '../../assets/LogoHeader.png';
import Banner from '../../assets/Banner.png';
import {Paragraph} from '../../components/atoms/Paragraph';
import HistoricItem from '../../components/molecules/HistoricItem';

export const Historic = (): JSX.Element => {
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
          <Paragraph weight='bold' size={20}>Historico</Paragraph>
        </LabelContent>
        <HistoricItem />
      </Body>
    </Container>
  );
};
