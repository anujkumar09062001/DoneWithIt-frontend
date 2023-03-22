import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../auth/auth'
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Screen from '../components/Screen';

const AccountScreen = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <ListItem
            title={user.name}
            subtitle={user.email}
            IconComponent={
              <View style={styles.iconUser}>
                <MaterialCommunityIcons name='account-circle'
                  size={25} color={colors.white} />
              </View>
            }
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <ListItem
            title='Logout'
            IconComponent={
              <View style={styles.iconLogout}>
                <MaterialCommunityIcons name='logout'
                  size={25} color={colors.white} />
              </View>
            }
            onPress={handleLogout}
          />
        </View>
      </View>
    </Screen>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    marginTop: 10
  },
  iconUser: {
    backgroundColor: colors.primary,
    padding: 10
  },
  iconLogout: {
    backgroundColor: '#ffe66d',
    padding: 10
  }
})

export default AccountScreen