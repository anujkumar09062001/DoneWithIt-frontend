import axios from 'axios';
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import loginApi from '../api/loginApi';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import useAuth from '../auth/auth';
import ErrorMessage from '../components/ErrorMessage';

const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useAuth();

  const onSubmit = () => {
    axios.post('/users', {
      email: email, name: name, password, password
    })
      .then(async (res) => {
        const { email, password } = res.data;
        const user = { email, password };
        const result = await loginApi(user);
        login(result.data);
      })
      .catch(err => setError(err.response.data.error));
  };

  return (
    <View style={styles.container}>
      {error && <ErrorMessage message={error} />}
      <AppTextInput
        icon='account'
        placeholder='Enter your name'
        handleChangeText={newtext => setName(newtext)}
      />
      <AppTextInput
        icon='email'
        placeholder='Enter your email'
        handleChangeText={newtext => setEmail(newtext)}
      />
      <AppTextInput
        icon='lock'
        placeholder='Enter your password'
        secureTextEntry //type="password"
        handleChangeText={newtext => setPassword(newtext)}
      />
      <AppButton title='Register' onPress={onSubmit} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 15
  }
})

export default Registration