import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const GoalInput = (props) => {

  return (
    <View style={styles.goalContainer}>
      <Text style={styles.goalTitle}>{props.item.text}</Text>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  goalContainer: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#C7BCA1'
  },
  goalTitle: {
    color: '#000',
    fontWeight: '700',
  }
})