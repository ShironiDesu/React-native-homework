import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, TouchableHighlight } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button, FlatList, TextInput } from "react-native-web";

export default function App() {
  let [todos, setTodos] = useState([
    { id: 1, title: "Buy groceries", isDone: false },
    { id: 2, title: "Walk the dog", isDone: true },
    { id: 3, title: "Finish project", isDone: false },
    { id: 4, title: "Call mom", isDone: true },
    { id: 5, title: "Clean the house", isDone: false },
    { id: 6, title: "Go to the gym", isDone: false },
    { id: 7, title: "Read a book", isDone: true },
    { id: 8, title: "Fix the sink", isDone: false },
    { id: 9, title: "Pay bills", isDone: true },
    { id: 10, title: "Learn JavaScript", isDone: false },
    { id: 11, title: "Water the plants", isDone: true },
    { id: 12, title: "Reply to emails", isDone: false },
    { id: 13, title: "Schedule a meeting", isDone: true },
    { id: 14, title: "Plan vacation", isDone: false },
    { id: 15, title: "Cook dinner", isDone: true },
    { id: 16, title: "Clean the car", isDone: false },
    { id: 17, title: "Buy a gift", isDone: true },
    { id: 18, title: "Visit the doctor", isDone: false },
    { id: 19, title: "Prepare presentation", isDone: true },
    { id: 20, title: "Organize the files", isDone: false },
  ]);

  const [newTodoTitle, setNewTodoTitle] = useState("");
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const deleteTodo = (id) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
      fadeAnim.setValue(1);
    });
  };

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -10,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const addTodoAnim = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const addTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo = {
        id: todos.length + 1,
        title: newTodoTitle,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
      addTodoAnim();
    } else {
      startShake();
    }
  };

  const renderItem = ({ item }) => (
    <Animated.View style={{ opacity: fadeAnim }}>
      <View>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Button title="Удалить" onPress={() => deleteTodo(item.id)}></Button>
      </View>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ transform: [{ translateX: shakeAnim }], width: 200 }}
      >
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={newTodoTitle}
          onChangeText={setNewTodoTitle}
        />
      </Animated.View>
      <Button title="Add Todo" onPress={addTodo} />

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  todoText: {
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "100%",
    marginBottom: 10,
    borderRadius: 5,
  },
});
