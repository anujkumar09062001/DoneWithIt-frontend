import React, { useState } from 'react'
import { StyleSheet, Image, Keyboard } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import useAuth from '../auth/auth';
import loginApi from '../api/loginApi';
import colors from '../config/colors';
import ErrorMessage from '../components/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
  password: Yup.string("Please Enter Valid Password").required("Please Enter Password"),
})

const LoginFormik = () => {
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const onSubmit = async (values) => {
    Keyboard.dismiss();
    setLoading(true);
    loginApi(values).then(res => {
      login(res.data);
    })
      .catch(err => {
        setLoading(false);
        setVisible(true);
        setError(err.response.data);
      });
  }

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Image source={require('../assets/logo-red.png')} style={styles.icon} />
        {error && <ErrorMessage message={error} visible={visible} />}
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit, touched }) => (
            <>
              <AppTextInput
                value={values.email}
                icon='email'
                placeholder='Enter your email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <ErrorMessage message={errors['email']} visible={touched['email']} />
              <AppTextInput
                value={values.password}
                icon='lock'
                placeholder='Enter your password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
              />
              <ErrorMessage message={errors['password']} visible={touched['password']} />
              <AppButton
                title='Login'
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </Screen>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 50
  },
  error: {
    color: colors.primary
  }
});

export default LoginFormik;