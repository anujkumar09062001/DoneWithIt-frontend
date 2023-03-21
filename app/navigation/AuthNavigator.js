import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginFormik from '../screens/LoginFormik';
import RegistrationFormik from '../screens/RegistrationFormik';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Login' component={LoginFormik} options={{
        headerTransparent: true
      }} />
      <Stack.Screen name='Register' component={RegistrationFormik} options={{
        headerTransparent: true
      }} />
    </Stack.Navigator>
  )
};

export default AuthNavigator;