import React from 'react'
import { Modal, View, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import colors from '../config/colors';

const UploadScreen = ({ visible = false, onDone, progress = 0 }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {
          progress < 1
            ?
            <Progress.Bar
              progress={progress}
              color={colors.primary}
              width={200}
            />
            :
            <LottieView
              onAnimationFinish={onDone}
              autoPlay
              loop={false}
              source={require('../assets/animations/done.json')}
            />
        }
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});


export default UploadScreen