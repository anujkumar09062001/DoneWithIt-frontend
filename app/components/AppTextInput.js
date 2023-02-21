import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const AppTextInput = ({ icon, placeholder, handleChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons name={icon} size={25}
        color={colors.medium} style={styles.icon}
      />
      <TextInput placeholder={placeholder}
        placeholderTextColor={colors.medium}
        onChangeText={handleChangeText}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 8,
    paddingLeft: 40
  },
  icon: {
    marginRight: 10,
    position: 'absolute',
    top: 15,
    left: 8
  }
});

export default AppTextInput;