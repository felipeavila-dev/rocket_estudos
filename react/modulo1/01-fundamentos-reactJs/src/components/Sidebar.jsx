import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1577375729078-820d5283031c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div className={styles.profile}>
        <Avatar src='https://github.com/felipeavila-dev.png' />
        <strong>Felipe Avila</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}