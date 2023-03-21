import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import LoginFormik from '../screens/LoginFormik';
import Registration from '../screens/Registration';

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
      <Stack.Screen name='Register' component={Registration} options={{
        headerTransparent: true
      }} />
    </Stack.Navigator>
  )
};

export default AuthNavigator;