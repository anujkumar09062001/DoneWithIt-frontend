import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';

const ListingDetails = ({ route }) => {
  const listing = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: listing.images[0].url }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>${listing.price}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
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