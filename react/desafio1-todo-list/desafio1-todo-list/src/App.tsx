import { useState } from "react";
import { CreateTask } from "./components/CreateTask"
import { Header } from "./components/Header"
import { MainArea } from "./components/MainArea"

interface Tasks {
  id: number | string;
  text: string;
  done: boolean;
}

const initialTasks = [
  { id: 1, text: "Tarefa de teste 1", done: true },
  { id: 2, text: "Tarefa de teste 2", done: false },
  { id: 3, text: "Tarefa de teste 3", done: false },
  { id: 4, text: "Tarefa de teste 4", done: false },
]

function App() {  
  const [allTasks, setAllTasks] = useState(initialTasks);

  function handleChangeStatus(currentId: number | string) {
    const changedTasks = [...allTasks];
    changedTasks.forEach((task) => {
      if(task.id === currentId) {
          task.done = !task.done;
      }
    });
    setAllTasks(changedTasks);
  }

  function handleDeleteTask(currentId: number | string) {
    const newTasks = allTasks.filter((task) => task.id !== currentId);
    setAllTasks(newTasks);
  } 

  function countDoneTasks() {
    const doneTasks = allTasks.filter((task) => task.done == true);
    return doneTasks.length;
  }

  function createNewTask(newTask: Tasks) {
    setAllTasks([...allTasks, newTask]);
  }
  
  return (
    <div>
      <Header />
      <CreateTask createTask={createNewTask} />
      <MainArea
        tasks={ allTasks }
        changeStatus={handleChangeStatus}
        deleteTask={handleDeleteTask}
        countTasks={countDoneTasks()}
      />
    </div>
  )
}

export default App
