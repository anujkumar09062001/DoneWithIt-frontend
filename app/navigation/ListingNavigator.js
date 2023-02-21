import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Listings from '../screens/Listings';
import ListingDetails from '../screens/ListingDetails';

const Stack = createNativeStackNavigator();

const ListingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Listings' component={Listings} options={{
        headerShown: false
      }} />
      <Stack.Screen name='ListingDetails' component={ListingDetails}
        options={{
          title: 'Details'
        }} />
    </Stack.Navigator>
  )
}

export default ListingNavigator