import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen';
import colors from '../config/colors';

const ListingDetails = ({ route }) => {
  const listing = route.params;

  return (
    <Screen style={styles.screenContainer}>
      <View style={styles.container}>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.subTitle}>${listing.price}</Text>
        </View>
      </View>
    </Screen>
  )
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 0
  },
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 20
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.secondary,
    paddingVertical: 10
  },
})

export default ListingDetails;