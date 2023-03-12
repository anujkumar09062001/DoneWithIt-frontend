import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defautStyles from '../config/styles';

const AppTextInput = ({ icon, placeholder, handleChangeText, width, ...otherProps }) => {
  return (
    <View style={[styles.inputContainer, { width: width, paddingLeft: icon ? 40 : 15 }]}>
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
  },
  icon: {
    position: 'absolute',
    top: 18,
    left: 8,
  }
});

export default AppTextInput;