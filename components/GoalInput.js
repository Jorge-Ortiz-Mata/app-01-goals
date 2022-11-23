import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const GoalInput = (props) => {

  const [enteredGoal, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    props.onAddGoal(enteredGoal);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.addGoalContainer}>
      <TextInput
        style={styles.input}
        placeholder="learn english..."
        onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button
        title="Add goal"
        onPress={addGoalHandler} />
    </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  addGoalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 1,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontWeight: '600',
    flex: 1
  }
})
