import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors';

const ErrorMessage = ({ message }) => {
  return (
    <View>
      <Text style={styles.error}>{message}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  error: {
    color: colors.primary,
    fontSize: 18,
  }
});

export default ErrorMessage