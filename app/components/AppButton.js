import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../config/colors';

const AppButton = ({ title, color = colors.primary, onSubmit }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]}
      onPress={onSubmit}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: colors.white
  }
});

export default AppButton;