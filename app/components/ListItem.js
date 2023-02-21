import React from 'react'
import { Image, Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import colors from '../config/colors'

const ListItem = ({ title, subtitle, image, IconComponent, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.listContainer}>
        <View style={styles.imageContainer}>
          {image &&
            <Image source={image}
              style={styles.image}
            />
          }
          {IconComponent}
        </View>
        <View>
          <Text style={styles.listTitle}>{title}</Text>
          {subtitle &&
            <Text style={styles.listSubTitle}>{subtitle}</Text>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.white
  },
  imageContainer: {
    borderRadius: 35,
    overflow: 'hidden',
    marginRight: 10
  },
  image: {
    width: 70,
    height: 70,
  },
  listTitle: {
    fontSize: 18
  },
  listSubTitle: {
    fontSize: 16,
    color: colors.medium
  }
})

export default ListItem;