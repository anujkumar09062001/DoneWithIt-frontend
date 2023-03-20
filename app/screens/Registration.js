import axios from 'axios';
import React, { useState } from 'react'
import { Keyboard, View, StyleSheet } from 'react-native'
import loginApi from '../api/loginApi';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import useAuth from '../auth/auth';
import ErrorMessage from '../components/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';
import Screen from '../components/Screen';

const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const onSubmit = () => {
    Keyboard.dismiss();
    setLoading(true);
    axios.post('/users', {
      email: email, name: name, password: password
    })
      .then(async () => {
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

export default Registration