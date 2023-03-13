import React from 'react'
import { useFormikContext } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Image, TouchableWithoutFeedback, View, StyleSheet, Alert } from 'react-native';
import colors from '../config/colors';

const AppImagePicker = () => {

  const { setFieldValue, values } = useFormikContext();

  const handlePress = () => {
    if (!values.image) selectImage();
    else Alert.alert("Delete", "Are you sure you want to delete this image?", [
      { text: "Yes", onPress: () => setFieldValue('image', null) },
      { text: "No" },
    ])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      })
      if (!result.canceled) {
        setFieldValue('image', result.assets[0].uri)
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.imageContainer}>
        {values.image ?
          <View>
            <Image source={{ uri: values.image }} style={styles.image} />
          </View>
          :
          <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />
        }
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: colors.light,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100,
  }
});

export default AppImagePicker