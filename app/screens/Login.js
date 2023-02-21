import axios from 'axios';
import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import useAuth from '../auth/auth';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth();

  const handleSubmit = () => {
    axios.post('/auth', {
      email: email, password: password
    })
      .then((res) => {
        console.log(res.data)
        login(res.data);
      })
      .catch(err => console.log(err))
  }

  return (
    <Screen style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.icon} />
      <AppTextInput
        icon='email'
        placeholder='Enter your email'
        handleChangeText={(newtext) => setEmail(newtext)}
      />
      <AppTextInput
        icon='lock'
        placeholder='Enter your password'
        handleChangeText={(newtext) => setPassword(newtext)}
      />
      <AppButton
        title='Login'
        onSubmit={handleSubmit}
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
  }
});

export default Login;