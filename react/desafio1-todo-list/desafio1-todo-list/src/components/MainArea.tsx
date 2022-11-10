import React, { useState } from 'react';
import styles from './Main.module.css';
import { TaskItem } from './TaskItem';

interface Tasks {
    id: number | string;
    text: string;
    done: boolean;
  }

interface MainProps {
    tasks: [{
        id: number | string;
        text: string;
        done: boolean;
    }];
    changeStatus: (id: number| string) => void;
    deleteTask: (id: number| string) => void;
    countTasks: number;
  }

export function MainArea({tasks, changeStatus, deleteTask, countTasks}: MainProps) {

    // function handleChangeStatus(currentId: number | string) {
    //     const changedTasks = [...allTasks];
    //     changedTasks.forEach((task) => {
    //         if(task.id === currentId) {
    //             task.done = !task.done;
    //         }
    //     });
    //     setAllTasks(changedTasks);
    // }

    // function handleDeleteTask(currentId: number | string) {
    //     const newTasks = allTasks.filter((task) => task.id !== currentId);
    //     setAllTasks(newTasks);
    // }

    // function countDoneTasks() {
    //     const doneTasks = allTasks.filter((task) => task.done == true);
    //     return doneTasks.length;
    // }

    

    return(
        <main className={styles.main}>
            <div className={styles.statusArea}>
                <p>Tarefas criadas <span>{ tasks.length }</span></p>
                <p>Concluídas <span>{countTasks}</span></p>
            </div>
            <div className={styles.tasksArea}>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        text={task.text}
                        id={task.id}
                        done={task.done}
                        handleDone={ changeStatus }
                        handleDelete={ deleteTask }
                    />
                ))}
            </div>
        </main>
    );
}