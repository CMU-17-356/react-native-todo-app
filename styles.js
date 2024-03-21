import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 12,
    },
    todoitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 25,
        paddingLeft: 80,
    },
    todoitemtext: {
        flex: 1,
        marginRight: 8,
        color: '#333',
    },
    completed: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    deletebutton: {
        backgroundColor: '#ff6347',
        color: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ff6347',
        cursor: 'pointer',
    },
});
