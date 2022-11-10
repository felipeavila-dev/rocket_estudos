import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from 'react';
import { TaskItem } from "../TaskItem";
import { styles } from "./styles";

export const MainArea = () => {
  const [taskList, setTaskList] = useState<string[]>([
    'Tarefa padrão inicial',
  ]);

  const [input, setInput] = useState('');

  const handleAdd = () => {
    setTaskList((prev) => [...prev, input]);
    setInput('');
  }

  return(
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder='Digite sua tarefa...'
          onChangeText={(e) => setInput(e)}
          value={input}
        />
        <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainHeader}>
        <View style={styles.headerContent}>
          <TextInput style={styles.headerTitle}>Criadas</TextInput>
          <TextInput style={styles.headerCount}>{taskList.length}</TextInput>
        </View>

        <View style={styles.headerContent}>
          <TextInput style={styles.headerTitle}>Finalizadas</TextInput>
          <TextInput style={styles.headerCount}>0</TextInput>
        </View>
      </View>

      <FlatList
        data={taskList}
        keyExtractor={task => task}
        renderItem={(task) => (
          <TaskItem text={task.item}/>
        )}
      />
    </View>
  );
}