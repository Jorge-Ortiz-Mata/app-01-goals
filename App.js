import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalsList, addGoalToList] = useState([
    {text: 'Hello', id: 1}, {text: 'World', id: 2}, {text: 'Jorge', id: 3}
  ]);

  function goalButtonHandle(enteredGoal){
    addGoalToList((currentGoalsList) => [
      ...currentGoalsList,
      {text: enteredGoal, id: Math.random().toString()},
    ])
  }

  function deleteGoal(id){
    const results = goalsList.filter(goal => goal.id !== id);
    addGoalToList(results);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Goals App</Text>
        <Text style={styles.text}>You can add your personal goals here!</Text>
      </View>
      <GoalInput onAddGoal={goalButtonHandle} />
      <View style={styles.listConatiner}>
        <Text style={styles.listTitle}>List of goals...</Text>
      </View>
      <View style={{height: 400}}>
        <FlatList data={goalsList}
          keyExtractor={(item, index) =>{
            return item.id
          }}
          renderItem={itemData => {
          return <GoalItem item={itemData.item} deleteGoalT={deleteGoal} />;
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
  listConatiner: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
  },
  listTitle: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 18
  }
});
