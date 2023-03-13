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

const Listings = ({ navigation, route }) => {
  const [listings, setlistings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getListings = () => {
    axios.get('/listing')
      .then(res => {
        setRefreshing(false);
        setlistings(res.data);
        setLoading(false)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getListings();
  }, [route]);

  return (<>
    <ActivityIndicator visible={loading} />
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing._id.toString()}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <Card
              image={item?.image}
              title={item?.title}
              subTitle={item?.price}
              onPress={() => navigation.navigate('ListingDetails', item)}
            />
          </View>
        }
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          getListings();
        }}
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