import { ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/Rauanny01.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rauanny Santos</strong>
                            <time title="07 de Março às 14:23h "dateTime="2024-03-07 14:23:34">Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Rauanny, parabéns!! </p>
                </div>

             <footer>
             </footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </div>

        </div>
    )
}