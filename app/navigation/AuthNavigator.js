import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import Registration from '../screens/Registration';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Registration} />
    </Stack.Navigator>
  )
};

export default AuthNavigator;