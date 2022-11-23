import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoalText] = useState('');
  const [goalsList, addGoalToList] = useState([
    {text: 'Hello', id: 2}, {text: 'World', id: 3}, {text: 'Jorge', id: 1},
    {text: 'Hello 2', id: 4}, {text: 'World 2', id: 5}, {text: 'Jorge Ortiz', id: 6},
  ]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  function goalButtonHandle(){
    addGoalToList((currentGoalsList) => [
      ...currentGoalsList,
      {text: enteredGoal, id: Math.random().toString()},
    ])
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Goals App</Text>
        <Text style={styles.text}>You can add your personal goals here!</Text>
      </View>
      <View style={styles.addGoalContainer}>
        <TextInput
          style={styles.input}
          placeholder="learn english..."
          onChangeText={goalInputHandler} />
        <Button
          title="Add goal"
          style={styles.button}
          onPress={goalButtonHandle} />
      </View>
      <View style={styles.listConatiner}>
        <Text style={styles.listTitle}>List of goals...</Text>
      </View>
      <View style={{height: 400}}>
        <FlatList data={goalsList}
          keyExtractor={(item, index) =>{
            return item.id
          }}
          renderItem={itemData => {
          return(
            <View style={styles.goalContainer}>
              <Text style={styles.goalTitle}>{itemData.item.text}</Text>
            </View>
          );
        }} alwaysBounceVertical={false} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282A3A',
    padding: 20,
    paddingTop: 50,
    color: '#ffffff'
  },
  title: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center'
  },
  text: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center'
  },
  addGoalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontWeight: '600',
    flex: 1
  },
  listConatiner: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
  },
  listTitle: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 18
  },
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
});
