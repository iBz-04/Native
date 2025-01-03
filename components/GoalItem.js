import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props){
    return (
        <View style={styles.goalItem}>
        <Pressable android_ripple={{color: '#ddddd'}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem} 
        >
        <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
        </View>
    );

}

export default GoalItem;

const styles = StyleSheet.create({ 
goalItem : {
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5
},
pressedItem: {
    opacity: 0.5
},
goalText: {
    padding: 8,
}
});