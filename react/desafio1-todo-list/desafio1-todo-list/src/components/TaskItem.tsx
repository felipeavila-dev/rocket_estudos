import styles from './TaskItem.module.css';

import TrashIcon from '../assets/trash.png';

interface TaskItemProps {
    id: number | string;
    text: string;
    done: boolean;
    handleDone: (id: number | string) => void;
    handleDelete: (id: number | string) => void;
  }

export function TaskItem({ id, text, done, handleDone, handleDelete}: TaskItemProps) {
    
    function handleChangeTasks() {
        handleDone(id);
    }

    function handleDeleteTask() {
        handleDelete(id);
    }

    return(
        <div className={styles.container}>
            <input type="checkbox" checked={done} onChange={ handleChangeTasks }/>
            <p className={done ? styles.taskDone : ''}>{ text }</p>
            <img src={TrashIcon} alt="" onClick={handleDeleteTask}/>
        </div>
    )
}