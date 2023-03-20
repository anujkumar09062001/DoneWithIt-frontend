import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='AccountScreen' component={AccountScreen} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  )
}

export default AccountNavigator