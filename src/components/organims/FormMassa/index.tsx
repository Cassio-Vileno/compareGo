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
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {massa} from '../../../utils/medidas';
import uuid from 'react-native-uuid';
import ModalResult from '../../molecules/ModalResult';
import {calculeMassa} from '../../../utils/calculeMassa';
import * as Yup from 'yup';

type FormMassaProps = {
  handleRefresh: () => void;
};

export const FormMassa = ({handleRefresh}: FormMassaProps): JSX.Element => {
  const FormSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    massa: Yup.string().required('Campo obrigatório'),
    price: Yup.string().required('Campo obrigatório'),
    medida: Yup.string().required('Campo obrigatório'),
  });

  const {getItem, setItem} = useAsyncStorage('@comparego:products_massa');
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: FormSchema,
    initialValues: {
      name: '',
      price: '',
      massa: '',
      medida: {label: '', value: ''},
    },
    onSubmit: async (data: any) => {
      try {
        const newData = {
          id: uuid.v4(),
          name: data.name,
          price: data.price,
          amount: data.massa,
          medida: data.medida,
        };
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];
        const item = [...previousData, newData];
        setItem(JSON.stringify(item));
        handleRefresh();
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <View style={theme.box}>
      <FormContainer>
        <InputText
          placeholder="Nome"
          value={values.name}
          error={errors.name}
          onChangeText={handleChange('name')}
          touched={touched.name}
        />
        <ConatinerValue>
          <InputText
            placeholder="Preço"
            value={values.price}
            error={errors.price}
            onChangeText={handleChange('price')}
            touched={touched.price}
            keyboardType="numeric"
          />
          <ContainerVolume>
            <InputText
              style={{paddingRight: 13}}
              placeholder="Massa"
              value={values.massa}
              error={errors.massa}
              keyboardType="numeric"
              onChangeText={handleChange('massa')}
              touched={touched.massa}
            />
            <InputPicker
              placeholder="medida"
              items={massa}
              value={values.medida}
              onChangeText={handleChange('medida')}
              touched={touched.medida}
              onChange={() => handleSubmit()}
              onBlur={handleBlur('medida')}
              error={errors.medida}
            />
          </ContainerVolume>
        </ConatinerValue>
      </FormContainer>
      <ButtonContainer>
        <Button onPress={() => handleSubmit()}>
          <Paragraph size={20} color="#ffff">
            Adicionar
          </Paragraph>
        </Button>
      </ButtonContainer>
    </View>
  );
};
