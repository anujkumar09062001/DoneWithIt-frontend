import React, { useState } from 'react'
import { StyleSheet, Keyboard } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppImagePicker from '../components/AppImagePicker';
import Picker from '../components/Picker';
import ErrorMessage from '../components/ErrorMessage';
import axios from 'axios';
import UploadScreen from '../components/UploadScreen';

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const listingSchema = Yup.object().shape({
  image: Yup.string().required('Please Select Image'),
  title: Yup.string().required('Please Enter Title'),
  price: Yup.number().min(1, 'Price should be greater than zero!').required('Please Enter Price'),
  categoryId: Yup.object().required('Please Select Category'),
  description: Yup.string().required('Please Enter Description'),
});

const AddListings = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const onSubmit = (values, { resetForm }) => {
    Keyboard.dismiss();
    setProgress(0);
    setVisible(true);
    const { title, price, image, categoryId, description } = values;
    const data = new FormData();
    data.append('image', {
      name: new Date() + '_image',
      uri: image,
      type: 'image/jpeg',
    });
    data.append('title', title);
    data.append('price', price);
    data.append('categoryId', categoryId.value);
    data.append('description', description);
    axios.post('/listing', data, {
      onUploadProgress: (progress) => setProgress(progress.loaded / progress.total)
    })
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        setVisible(false);
        alert(err.response)
      });
  };

  const handleDone = () => {
    setVisible(false);
    navigation.navigate('Listings', { refresh: true });
  }

  return (
    <Screen style={styles.container}>
      <UploadScreen visible={visible} onDone={handleDone} progress={progress} />
      <Formik
        initialValues={{
          title: '',
          price: '',
          categoryId: '',
          description: '',
          image: null
        }}
        validationSchema={listingSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleSubmit, errors, touched, handleBlur }) => (
          <>
            <AppImagePicker />
            <ErrorMessage message={errors['image']} visible={touched['image']} />
            <AppTextInput
              value={values.title}
              onChangeText={handleChange('title')}
              placeholder='Title'
              onBlur={handleBlur('title')}
            />
            <ErrorMessage message={errors['title']} visible={touched['title']} />
            <AppTextInput
              value={values.price}
              onChangeText={handleChange('price')}
              placeholder='Price'
              keyboardType='numeric'
              onBlur={handleBlur('price')}
            />
            <ErrorMessage message={errors['price']} visible={touched['price']} />
            <Picker
              categories={categories}
            />
            <ErrorMessage message={errors['categoryId']} visible={touched['categoryId']} />
            <AppTextInput
              value={values.description}
              onChangeText={handleChange('description')}
              placeholder='Description'
              onBlur={handleBlur('description')}
            />
            <ErrorMessage message={errors['description']} visible={touched['description']} />
            <AppButton title='Submit' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
})

export default AddListings