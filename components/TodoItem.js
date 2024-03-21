import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from '../styles';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <View style={styles.todoitem}>
            <BouncyCheckbox
                value={task.completed}
                onPress={() => toggleCompleted(task.id)}
            />
            <Text style={[styles.todoitemtext, task.completed && styles.completed]}>
                {task.text}
            </Text>
            <TouchableOpacity
                style={styles.deletebutton}
                onPress={() => deleteTask(task.id)}
            >
                <Text style={{ color: '#fff' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}
