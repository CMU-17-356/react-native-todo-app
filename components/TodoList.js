import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import TodoItem from './TodoItem';
import styles from '../styles';

export default function TodoList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'HW5', completed: false },
        { id: 2, text: 'Final project user stories', completed: false },
    ]);

    const [text, setText] = useState('');

    function addTask() {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: 50 }}>17-356 Mobile Todo App</Text>

            {tasks.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="New Task"
            />
            <Button title="Add" onPress={addTask} />
        </View>
    );
}