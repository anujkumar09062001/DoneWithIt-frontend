import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../auth/auth'
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const AccountScreen = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <View style={styles.container}>
      <View>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <ListItem
          // image={require('../assets/mosh.jpg')}
          title='Logout'
          IconComponent={
            <View style={styles.icon}>
              <MaterialCommunityIcons name='logout'
                size={25} color={colors.white} />
            </View>
          }
          onPress={handleLogout}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light
  },
  icon: {
    backgroundColor: '#ffe66d',
    padding: 10
  }
})

export default AccountScreen