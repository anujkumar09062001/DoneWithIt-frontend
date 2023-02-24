import axios from 'axios';
import React, { useState } from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import useAuth from '../auth/auth';
import loginApi from '../api/loginApi';
import colors from '../config/colors';
import ErrorMessage from '../components/ErrorMessage';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useAuth();

  const handleSubmit = async () => {
    const user = { email, password };
    loginApi(user).then(res => login(res.data))
      .catch(err => setError(err.response.data.error));
  }

  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.icon} />
      {error && <ErrorMessage message={error} />}
      <AppTextInput
        icon='email'
        placeholder='Enter your email'
        handleChangeText={(newtext) => setEmail(newtext)}
      />
      <AppTextInput
        icon='lock'
        placeholder='Enter your password'
        secureTextEntry
        handleChangeText={(newtext) => setPassword(newtext)}
      />
      <AppButton
        title='Login'
        onPress={handleSubmit}
      />
    </Screen>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: 'center'
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

export default Login;