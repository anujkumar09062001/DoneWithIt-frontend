import axios from 'axios';
import React, { useState } from 'react'
import { Keyboard, View, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';

import loginApi from '../api/loginApi';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import useAuth from '../auth/auth';
import ErrorMessage from '../components/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  email: Yup.string().email("Please enter valid email").required("Please enter email"),
  password: Yup.string().required("Please enter password"),
})

const RegistrationFormik = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const onSubmit = (values) => {
    Keyboard.dismiss();
    setLoading(true);
    axios.post('/users', values)
      .then(async () => {
        const { email, password } = values;
        const user = { email, password };
        const result = await loginApi(user);
        login(result.data);
      })
      .catch(err => {
        setVisible(true);
        setLoading(false);
        setError(err.response.data);
      });
  };

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      <View style={styles.container}>
        {error && <ErrorMessage message={error} visible={visible} />}
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: ""
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, touched, errors, handleBlur, handleChange, handleSubmit }) => (
            <>
              <AppTextInput
                icon='account'
                placeholder='Enter your name'
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              <ErrorMessage message={errors['name']} visible={touched['name']} />
              <AppTextInput
                icon='email'
                placeholder='Enter your email'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <ErrorMessage message={errors['email']} visible={touched['email']} />
              <AppTextInput
                icon='lock'
                placeholder='Enter your password'
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry //type="password"
              />
              <ErrorMessage message={errors['password']} visible={touched['password']} />
              <AppButton title='Register' onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </Screen>
  )
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center'
  }
})

export default RegistrationFormik;