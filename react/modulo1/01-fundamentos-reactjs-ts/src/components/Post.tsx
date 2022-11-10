import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import React, { ChangeEvent, useState } from 'react';

interface PostProps {
  author: { 
    avatarUrl: 'https://github.com/felipeavila-dev.png',
    name: 'Felipe Avila',
    role: 'Frontend Developer'
  };
  publishedAt: Date;
  content: [{
    type: 'paragraph' | 'link';
    content: string;
  }];
}

const comments = [1, 2, 3];

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([
    "Post muito legal!"
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'de' yyyy 'às' HH':'mm", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event: React.FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne);
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{ author.name }</strong>
            <span>{author.role}</span>
          </div>
        </div>
        
        <time title='25 de julho as 20:15' dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href='#'>{item.content}</a></p>
          }
        })}
        {/* <p>Fala galeraa 👋</p>
        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 {' '} <a href="">jane.design/doctorcare</a></p> */}

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feddback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        
        <footer>
          <button
            type="submit"
            disabled={newCommentText ? false : true}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  );
}