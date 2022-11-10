import { useState } from 'react';
import styles from './CreateTask.module.css';

import { v4 as uuidv4 } from 'uuid';

interface PropsType {
    createTask: (newTask: Object) => void;
}

export function CreateTask({createTask}: PropsType) {
    const [taskText, setTaskText] = useState('');

    function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskText(e.target.value);
    }

    function handleCreateNewTask() {
        const newTask = { id: uuidv4(), text: taskText, done: false };
        createTask(newTask);
        setTaskText('');
    }

    return(
        <section className={styles.section}>
                <input type="text" placeholder='Adicione uma tarefa' value={taskText} onChange={handleChangeText}/>
                <button onClick={ handleCreateNewTask }>Criar (+)</button>
        </section>
    );
}