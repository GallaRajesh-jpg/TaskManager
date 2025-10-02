import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
import { Task } from "../types/Task";

export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string) => {
    if (!title.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now().toString(), title, description, completed: false },
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskInput onAdd={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet. Add one!</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f9fa" },
  empty: { textAlign: "center", marginTop: 50, color: "#888", fontSize: 16 },
});
