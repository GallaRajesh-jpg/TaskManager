import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <View style={styles.container}>
      {/* Checkbox + Text */}
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => onToggle(task.id)}>
        <View style={[styles.checkbox, task.completed && styles.checked]}>
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, task.completed && styles.completed]}>
            {task.title}
          </Text>
          {task.description ? (
            <Text style={[styles.desc, task.completed && styles.completed]}>
              {task.description}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>

      {/* Delete button */}
      <TouchableOpacity style={styles.deleteBtn} onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    alignItems: "center",
  },
  checkboxContainer: { flexDirection: "row", flex: 1, alignItems: "center" },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#4CAF50",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checked: { backgroundColor: "#4CAF50" },
  checkmark: { color: "#fff", fontWeight: "bold" },
  textContainer: { flex: 1 },
  title: { fontSize: 16, fontWeight: "bold", color: "#333" },
  desc: { fontSize: 14, color: "#555", marginTop: 2 },
  completed: { textDecorationLine: "line-through", color: "#888" },
  deleteBtn: {
    backgroundColor: "#ff5252",
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
