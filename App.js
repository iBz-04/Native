import { StyleSheet, View, FlatList, Button} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }



  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals => 
      [...currentGoals, 
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    } );
  };

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>

      <Button title="Add New Goal" color="#C4A484" onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>

        {/* better than scrollview in terms of dynamic and larger lists */}
      <FlatList data={courseGoals} 
      renderItem={itemData => {
        return  (
        <GoalItem 
        text={itemData.item.text}
        id={itemData.item.id}
        onDeleteItem={deleteGoalHandler}
        />);
      }}
      keyExtractor={(item, index) => {
        return item.id

      }}
      />

      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
   
  },
  goalsContainer : {
    flex: 5
  }
});
