import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface TaskInputProps {
  onAdd: (title: string, description: string) => void;
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;
    onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task title..."
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.descInput]}
        placeholder="Task description..."
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
        <Text style={styles.addText}>＋ Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  descInput: {
    height: 60,
    textAlignVertical: "top",
  },
  addBtn: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  addText: { fontSize: 16, color: "#fff", fontWeight: "bold" },
});
