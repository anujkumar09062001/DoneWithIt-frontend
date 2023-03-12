import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen'
import colors from '../config/colors';
import Picker from '../components/Picker';
import AppButton from '../components/AppButton';
import axios from 'axios';

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const AddListing = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handlePress = () => {
    if (!image) selectImage();
    else Alert.alert("Delete", "Are you sure you want to delete this image?", [
      { text: "Yes", onPress: () => setImage(null) },
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
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  }

  const handleSubmit = () => {
    const values = new FormData();
    values.append('image', {
      name: new Date() + '_image',
      uri: image,
      type: 'image/jpeg',
    });
    values.append('title', title);
    values.append('price', price);
    values.append('categoryId', categoryId);
    values.append('description', desc);
    axios.post('/listing', values)
      .then(res => {
        setImage(null);
        setTitle('');
        setPrice('');
        setDesc('');
        setCategoryId('');
        navigation.navigate('Listings', { refresh: true });
      })
      .catch(err => console.log(err));
  }

  return (
    <Screen style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.imageContainer}>
          {image ?
            <View>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
            :
            <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />
          }
        </View>
      </TouchableWithoutFeedback>
      <AppTextInput
        placeholder='Title'
        handleChangeText={newText => setTitle(newText)}
        value={title}
      />
      <AppTextInput
        placeholder='Price'
        keyboardType="numeric"
        width={150}
        handleChangeText={newText => setPrice(newText)}
        value={price}
      />
      <Picker
        categories={categories}
        handleSelect={item => setCategoryId(item.value)}
      />
      <AppTextInput
        placeholder='Decription'
        handleChangeText={newText => setDesc(newText)}
        value={desc}
      />
      <AppButton
        title='Submit'
        onPress={handleSubmit}
      />
    </Screen>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 15
  },
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
})

export default AddListing