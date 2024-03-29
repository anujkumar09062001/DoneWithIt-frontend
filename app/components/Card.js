import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native-expo-image-cache';
import ThumbnailImage from '../assets/splash.png';
import colors from '../config/colors';

const Card = ({ image, title, subTitle, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image uri={image} style={styles.image}
          preview={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubTitle}>${subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: colors.white
  },
  cardTitle: {
    fontSize: 20
  },
  cardSubTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.secondary,
    paddingVertical: 6
  },
});

export default Card;