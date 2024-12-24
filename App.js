import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter your goal" />
        <Button title="Add" />
      </View>

      <View>
        <Text>My Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
    padding: 50,
    margin: 20,
    backgroundColor: '#fff',
  },
  inputContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput : {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10, 
  }
});
