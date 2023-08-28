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
import {volume} from '../../../utils/medidas';
import uuid from 'react-native-uuid';
import ModalResult from '../../molecules/ModalResult';
import * as Yup from 'yup';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

type FormVolumeProps = {
  handleRefresh: () => void;
}

export const FormVolume = ({handleRefresh}: FormVolumeProps): JSX.Element => {
  const FormSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    volume: Yup.string().required('Campo obrigatório'),
    price: Yup.string().required('Campo obrigatório'),
    medida: Yup.string().required('Campo obrigatório'),
  });

  const [showModal, setShowModal] = useState(false);
  const [specifications, setSpecifications] = useState({});
  const {getItem, setItem} = useAsyncStorage('@comparego:products_volume');
  const {
    handleChange,
    setValues,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
    resetForm,
    values,
    touched,
    errors,
  } = useFormik({
    validationSchema: FormSchema,
    initialValues: {
      name: '',
      volume: '',
      price: '',
      medida: {label: '', value: ''},
    },
    onSubmit: async (data: any) => {
      try {
        const newData = {
          id: uuid.v4(),
          name: data.name,
          price: data.price,
          amount: data.volume,
          medida: data.medida,
        };
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];
        const item = [...previousData, newData];
        setItem(JSON.stringify(item));
        handleRefresh()
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
            error={errors.price}
            value={values.price}
            onChangeText={handleChange('price')}
            touched={touched.price}
            keyboardType="numeric"
          />
          <ContainerVolume>
            <InputText
              style={{paddingRight: 13}}
              placeholder="Volume"
              value={values.volume}
              error={errors.volume}
              keyboardType="numeric"
              touched={touched.volume}
              onChangeText={handleChange('volume')}
            />
            <InputPicker
              items={volume}
              value={values.medida}
              onChangeText={handleChange('medida')}
              onChange={() => handleSubmit()}
              onBlur={handleBlur('medida')}
              touched={touched.medida}
              error={errors.medida}
              placeholder="Medida"
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
      <ModalResult
        show={showModal}
        specifications={specifications}
        close={() => setShowModal(false)}
      />
    </View>
  );
};
