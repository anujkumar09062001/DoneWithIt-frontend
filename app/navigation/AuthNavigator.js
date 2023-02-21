import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Login' component={Login} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
};

export default AuthNavigator;