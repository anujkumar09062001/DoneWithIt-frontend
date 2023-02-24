import React from 'react';
import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native';

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loading.json')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%',
    opacity: 0.8,
    width: '100%',
    zIndex: 1,
    elevation: (Platform.OS === 'android') ? 1 : 0,
  }
})

export default ActivityIndicator;