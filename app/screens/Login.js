import React, { useState } from 'react'
import { StyleSheet, Image, Keyboard } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import useAuth from '../auth/auth';
import loginApi from '../api/loginApi';
import colors from '../config/colors';
import ErrorMessage from '../components/ErrorMessage';
import ActivityIndicator from '../components/ActivityIndicator';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async () => {
    Keyboard.dismiss();
    setLoading(true);
    const user = { email, password };
    loginApi(user).then(res => {
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

export default Login;