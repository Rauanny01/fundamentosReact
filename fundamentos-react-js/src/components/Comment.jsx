import { useState } from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] =useState(0);

    function handleDeletComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {        
        setLikeCount((state) => {
            return state + 1
        });
      

    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Rauanny01.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rauanny Santos</strong>
                            <time title="07 de Março às 14:23h " dateTime="2024-03-07 14:23:34">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeletComment} title="Deletar comentário">
                            <Trash size={24} /> {}
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer> 
                <button onClick={() => setLikeCount(likeCount + 1)}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
                </footer>

            </div>
        </div>
    )
}
