import React, { useEffect, useState } from 'react';
import {
  FlatList, View,
  StyleSheet
} from 'react-native';
import axios from 'axios';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Card from '../components/Card';
import ActivityIndicator from '../components/ActivityIndicator';

const Listings = ({ navigation }) => {
  const [listings, setlistings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getListings = () => {
    axios.get('/listings')
      .then(res => {
        setlistings(res.data);
        setLoading(false)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getListings();
  }, []);
  return (<>
    <ActivityIndicator visible={loading} />
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <Card
              image={item?.images[0]?.url}
              title={item?.title}
              subTitle={item?.price}
              onPress={() => navigation.navigate('ListingDetails', item)}
            />
          </View>
        }
      />
    </Screen>
  </>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1
  },
  container: {
    padding: 20,
    backgroundColor: colors.light
  },
  image: {
    width: '100%',
    height: 200
  },
  cardContainer: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 20
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.secondary,
    paddingVertical: 6
  },
})

export default Listings;