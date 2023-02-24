import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defautStyles from '../config/styles';

const AppTextInput = ({ icon, placeholder, handleChangeText, ...otherProps }) => {
  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons name={icon} size={25}
        color={colors.medium} style={styles.icon}
      />
      <TextInput placeholder={placeholder}
        placeholderTextColor={colors.medium}
        onChangeText={handleChangeText}
        style={defautStyles.text}
        {...otherProps}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 18,
    marginVertical: 8,
    paddingLeft: 40,
  },
  icon: {
    marginRight: 10,
    position: 'absolute',
    top: 18,
    left: 8
  }
});

export default AppTextInput;