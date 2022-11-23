import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalInput = (props) => {

  return (
    <Pressable
      android_ripple={{color: 'gray'}} // This is only for android.
      style={(pressData) => pressData.pressed && styles.pressedItem} // This is for Both, apple and android.
      onPress={props.deleteGoalT.bind(this, props.item.id)}>
      <View style={styles.goalContainer}>
        <Text style={styles.goalTitle}>{props.item.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  goalContainer: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ffffff'
  },
  pressedItem: {
    backgroundColor: '#ff0000'
  },
  goalTitle: {
    color: '#000',
    fontWeight: '700',
  }
})
