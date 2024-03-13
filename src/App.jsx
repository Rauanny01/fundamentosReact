import { Header } from './components/Header';
import { Post } from "./components/Post";
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rauanny Santos"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi impedit veniam quidem perspiciatis, iusto, error nostrum eos quisquam laboriosam labore asperiores accusamus alias id, nulla blanditiis repudiandae quia omnis! Expedita."
          />
           <Post 
            author="Diego Fernandes"
            content="Um professor bom"
           />
        </main>
      </div>
    </div>
  )
}

