import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Goals App</Text>
        <Text style={styles.text}>You can add your personal goals here!</Text>
      </View>
      <View style={styles.addGoalContainer}>
        <TextInput style={styles.input} value='Hello' />
        <Button title="Add goal" style={styles.button}/>
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
    color: '#ffffff'
  },
  title: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 30,
    textAlign: 'center'
  },
  text: {
    color: '#ffffff',
    fontWeight: 400,
    fontSize: 16,
    textAlign: 'center'
  },
  addGoalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    fontWeight: 600
  }
});
