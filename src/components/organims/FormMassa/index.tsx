import {
  Button,
  ButtonContainer,
  ConatinerValue,
  ContainerVolume,
  FormContainer,
} from './styles';
import {useFormik} from 'formik';
import {View} from 'react-native';
import {useState} from 'react';
import InputPicker from '../../atoms/InputPicker';
import InputText from '../../atoms/InputText';
import {Paragraph} from '../../atoms/Paragraph';
import {theme} from '../../../theme';
import ModalResult from '../../molecules/ModalResult';
import {calculeMassa} from '../../../utils/calculeMassa';
import {peso} from '../../../utils/medidas';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FormMassa = (): JSX.Element => {
  const FormSchema = Yup.object().shape({
    name_product_1: Yup.string().required('Campo obrigatório'),
    name_product_2: Yup.string().required('Campo obrigatório'),
    massa_product_1: Yup.string().required('Campo obrigatório'),
    massa_product_2: Yup.string().required('Campo obrigatório'),
    price_product_1: Yup.string().required('Campo obrigatório'),
    price_product_2: Yup.string().required('Campo obrigatório'),
    massa_1: Yup.string().required('Campo obrigatório'),
    massa_2: Yup.string().required('Campo obrigatório'),
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
    errors,
    touched,
  } = useFormik({
    validationSchema: FormSchema,
    initialValues: {
      name_product_1: '',
      name_product_2: '',
      massa_product_1: '',
      massa_product_2: '',
      price_product_1: '',
      price_product_2: '',
      massa_1: '',
      massa_2: '',
    },
    onSubmit: async (data: any) => {
      const {price_100_product_1, price_100_product_2} = await calculeMassa(
        data,
      );
      setSpecifications({
        title_1: values.name_product_1,
        title_2: values.name_product_2,
        medida_product_1: `Massa: ${values.massa_product_1}`,
        medida_product_2: `Massa: ${values.massa_product_2}`,
        price_1: values.price_product_1,
        price_2: values.price_product_2,
        textPrice: 'Custo por 100g:',
        price_100_product_1,
        price_100_product_2,
        medida_1: values.massa_1,
        medida_2: values.massa_2,
      });
      await AsyncStorage.setItem(
        `@comparego:historic:${new Date()}`,
        JSON.stringify(specifications),
      );
      setShowModal(true);
    },
  });

  return (
    <View style={theme.box}>
      <FormContainer>
        <InputText
          placeholder="Nome"
          error={errors.name_product_1}
          onChangeText={handleChange('name_product_1')}
          touched={touched.name_product_1}
        />
        <ConatinerValue>
          <InputText
            placeholder="Preço"
            error={errors.price_product_1}
            onChangeText={handleChange('price_product_1')}
            touched={touched.price_product_1}
            keyboardType="numeric"
          />
          <ContainerVolume>
            <InputText
            style={{paddingRight: 13}}
              placeholder="Massa"
              error={errors.massa_product_1}
              keyboardType="numeric"
              onChangeText={handleChange('massa_product_1')}
              touched={touched.massa_product_1}
            />
            <InputPicker
            placeholder='medida'
              items={peso}
              value={values.massa_1}
              onChangeText={handleChange('massa_1')}
              touched={touched.massa_1}
              onChange={() => handleSubmit()}
              onBlur={handleBlur('massa_1')}
              error={errors.massa_1}
            />
          </ContainerVolume>
        </ConatinerValue>
      </FormContainer>
      <ButtonContainer>
        <Button onPress={() => handleSubmit()}>
          <Paragraph color="#ffff">Adicionar</Paragraph>
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
