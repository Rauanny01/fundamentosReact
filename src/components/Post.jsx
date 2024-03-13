import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/Rauanny01.png"/>
                <div className={styles.authorInfo}></div>
                    <strong>Rauanny Santos</strong>
                    <span>Dev Front-end</span>
                </div>
                
                <time title="07 de Março às 14:23h "dateTime="2024-03-07 14:23:34">Publicado há 2h</time>
            </header>
            <div className={styles.content}>

            <p>Fala pessoal 👋</p>

            <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻</p>

            <p>Acesse e deixe seu feedback 👉</p>
                <a href="">devonlane.design</a>
                <p href="">#novoprojeto #nlw #rocketseat</p>

            </div>
        </article>
    )
}