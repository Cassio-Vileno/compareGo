import {
  Button,
  ButtonContainer,
  ConatinerValue,
  FormContainer,
  FormContent,
  Line,
} from './styles';
import {useFormik} from 'formik';
import {View} from 'react-native';
import {useState} from 'react';
import InputPicker from '../../atoms/InputPicker';
import InputText from '../../atoms/InputText';
import {Paragraph} from '../../atoms/Paragraph';
import {theme} from '../../../theme';
import {volume} from '../../../utils/medidas';
import {calculeVolume} from '../../../utils/calculeVolume';
import ModalResult from '../../molecules/ModalResult';
import * as Yup from 'yup';

export const FormVolume = (): JSX.Element => {
  const FormSchema = Yup.object().shape({
    name_product_1: Yup.string().required('Campo obrigatório'),
    name_product_2: Yup.string().required('Campo obrigatório'),
    volume_product_1: Yup.string().required('Campo obrigatório'),
    volume_product_2: Yup.string().required('Campo obrigatório'),
    price_product_1: Yup.string().required('Campo obrigatório'),
    price_product_2: Yup.string().required('Campo obrigatório'),
    volume_1: Yup.string().required('Campo obrigatório'),
    volume_2: Yup.string().required('Campo obrigatório'),
  });

  const [showModal, setShowModal] = useState(false);
  const [specifications, setSpecifications] = useState({});
  const {
    handleChange,
    setValues,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
    values,
    touched,
    errors,
  } = useFormik({
    validationSchema: FormSchema,
    initialValues: {
      name_product_1: '',
      name_product_2: '',
      volume_product_1: '',
      volume_product_2: '',
      price_product_1: '',
      price_product_2: '',
      volume_1: '',
      volume_2: '',
    },
    onSubmit: async (data: any) => {
      const {price_100_product_1, price_100_product_2} = await calculeVolume(
        data,
      );
      setSpecifications({
        title_1: values.name_product_1,
        title_2: values.name_product_2,
        medida_product_1: `Volume: ${values.volume_product_1}`,
        medida_product_2: `Volume: ${values.volume_product_2}`,
        price_1: values.price_product_1,
        price_2: values.price_product_2,
        textPrice: 'Custo por 100ml:',
        price_100_product_1,
        price_100_product_2,
        medida_1: values.volume_1,
        medida_2: values.volume_2,
      });
      setShowModal(true);
    },
  });

  return (
    <View style={theme.box}>
      <FormContainer>
        <FormContent>
          <InputText
            placeholder="Nome"
            error={errors.name_product_1}
            onChangeText={handleChange('name_product_1')}
            touched={touched.name_product_1}
          />
          <InputText
            placeholder="Preço"
            error={errors.price_product_1}
            onChangeText={handleChange('price_product_1')}
            touched={touched.price_product_1}
            keyboardType="numeric"
          />
          <ConatinerValue>
            <InputText
              placeholder="Volume"
              error={errors.volume_product_1}
              keyboardType="numeric"
              touched={touched.volume_product_1}
              onChangeText={handleChange('volume_product_1')}
            />
            <InputPicker
              items={volume}
              value={values.volume_1}
              onChangeText={handleChange('volume_1')}
              onChange={() => handleSubmit()}
              onBlur={handleBlur('volume_1')}
              touched={touched.volume_1}
              error={errors.volume_1}
            />
          </ConatinerValue>
        </FormContent>
        <Line />
        <FormContent>
          <InputText
            placeholder="Nome"
            error={errors.name_product_2}
            onChangeText={handleChange('name_product_2')}
            touched={touched.name_product_2}
          />
          <InputText
            placeholder="Preço"
            error={errors.price_product_2}
            onChangeText={handleChange('price_product_2')}
            touched={touched.price_product_2}
            keyboardType="numeric"
          />
          <ConatinerValue>
            <InputText
              placeholder="Volume"
              error={errors.volume_product_2}
              onChangeText={handleChange('volume_product_2')}
              touched={touched.volume_product_2}
              keyboardType="numeric"
            />
            <InputPicker
              items={volume}
              value={values.volume_2}
              onChangeText={handleChange('volume_2')}
              touched={touched.volume_2}
              onChange={() => handleSubmit()}
              onBlur={handleBlur('volume_2')}
              error={errors.volume_2}
            />
          </ConatinerValue>
        </FormContent>
      </FormContainer>
      <ButtonContainer>
        <Button onPress={() => handleSubmit()}>
          <Paragraph color="#ffff">Calcular</Paragraph>
        </Button>
      </ButtonContainer>
      <ModalResult
        show={showModal}
        specifications={specifications}
        close={() => setShowModal(false)}
      />
    </View>
  );
};
