import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingNavigator from './ListingNavigator';
import AccountNavigator from './AccountNavigator';
import AddListing from '../screens/AddListing';
import AddListings from '../screens/AddListings';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }} backBehavior='initialRoute'>
      <Tab.Screen name="Home" component={ListingNavigator} options={{
        tabBarIcon: ({ color, size }) =>
          <MaterialCommunityIcons
            name="home"
            color={color}
            size={size}
          />
      }} />
      <Tab.Screen name="AddListing" component={AddListings} options={{
        tabBarIcon: ({ color, size }) =>
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
      }} />
      <Tab.Screen name="Account" component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons
              name='account'
              color={color}
              size={size}
            />
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator;