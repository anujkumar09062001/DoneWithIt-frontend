import React from 'react'
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, { ...style }]}>
      <StatusBar style="dark" />
      {children}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
});

export default Screen