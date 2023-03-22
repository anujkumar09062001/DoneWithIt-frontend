import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-expo-image-cache';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

const ListingDetails = ({ route }) => {
  const listing = route.params;

  return (
    <Screen style={styles.screenContainer}>
      <View style={styles.container}>
        <Image uri={listing.image} preview={{ uri: listing.image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.subTitle}>${listing.price}</Text>
        </View>
        <View style={styles.author}>
          <ListItem IconComponent={
            <View style={styles.icon}>
              <MaterialCommunityIcons name='account-circle'
                size={30} color={colors.white} />
            </View>
          }
            title={listing.author.name} subtitle={listing.author.email} />
        </View>
      </View>
    </Screen>
  )
};

const styles = StyleSheet.create({
  screenContainer: {
    // marginTop: 10
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
  author: {
    color: colors.primary
  },
  icon: {
    backgroundColor: colors.primary,
    padding: 10
  }
})

export default ListingDetails;