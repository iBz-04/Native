import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText); // Pass the input text to the parent handler
        setEnteredGoalText(''); // Clear the input field
    }

    return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image source={require('../assets/images/goal.png')} style={styles.image}/>
            <TextInput 
                style={styles.textInput} 
                placeholder="Enter your goal" 
                onChangeText={goalInputHandler}
                value={enteredGoalText} 
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button color="gray" title="Add Goal" onPress={addGoalHandler} />
                </View>
                
                <View style={styles.button}>
                    <Button title="Cancel" color="brown" onPress={props.onCancel} />
                </View>
                
            </View>
            
        </View>
    </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#C4A484',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },  
    textInput: {
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        color: 'black',
        borderWidth: 1,
        padding: 16,
        borderRadius: 5,
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});
