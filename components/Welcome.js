import { useState } from 'react';
import { StyleSheet, View, Button, Modal, Text } from 'react-native';

const Welcome = (props) => {

  return(
    <Modal visible={props.visibility} animationType='fade'>
      <View style={styles.container}>
        <Text style={styles.text} >App Goals App</Text>
        <Button
          title='Add my goal'
          onPress={props.changeVisibility.bind(this, false)} />
      </View>
    </Modal>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282A3A',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 20
  }
})
