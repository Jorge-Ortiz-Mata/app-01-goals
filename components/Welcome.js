import { useState } from 'react';
import { StyleSheet, View, Button, Modal, Text } from 'react-native';

const Welcome = () => {

  const [isVisible, setVisibility] = useState(true)

  function changeVisibility(){
    setVisibility(false);
  }

  return(
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.container}>
        <Text style={styles.text} >Hello World 2</Text>
        <Button
          onPress={changeVisibility}
          title='Add my goal' />
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
    padding: 100,
    flex: 1
  },
  text: {
    color: '#ffffff'
  }
})
