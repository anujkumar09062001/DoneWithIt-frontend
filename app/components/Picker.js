import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors'
import defautStyles from '../config/styles';
import Screen from './Screen';
import { useFormikContext } from 'formik';

const Picker = ({ categories }) => {
  const [visible, setVisible] = useState(false)

  const { setFieldValue, values } = useFormikContext();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={styles.inputContainer}>
          {values.categoryId && <Text style={[defautStyles.text, { color: colors.dark }, styles.text]}>
            {values.categoryId.label}
          </Text>}
          {!values.categoryId && <Text style={[defautStyles.text, { color: colors.medium }, styles.text]}>
            Category
          </Text>}
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defautStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible}>
        <Screen>
          <Button title='Close' onPress={() => setVisible(false)} />
          <FlatList
            data={categories}
            keyExtractor={item => item.value.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={{
                width: '33%', paddingHorizontal: 20, paddingVertical: 20,
                alignItems: 'center'
              }}>
                <TouchableOpacity onPress={() => {
                  setVisible(false);
                  setFieldValue('categoryId', item)
                }}>
                  <View style={[{ backgroundColor: item.backgroundColor }, styles.icon]}>
                    <MaterialCommunityIcons name={item.icon} size={25}
                      color={colors.white}
                    />
                  </View>
                  <View>
                    <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.label}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 18,
    marginVertical: 8,
    paddingLeft: 15,
    width: 200,
    flexDirection: 'row',
  },
  text: {
    flex: 1
  },
  icon: {
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Picker