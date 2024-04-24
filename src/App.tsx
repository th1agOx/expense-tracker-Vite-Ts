//IMPORTANDO { COMPONENT } DO './ARQUIVO'

import { Header } from './components/header';
import { Post } from './components/Post' ;
import{ Sidebar } from './components/sidebar' ;

import styles from './App.module.css' ;
import './global.css' ;


//tipagem
export interface PostProps { //exportando PostProps do arquivo Post.tsx
  author: {
    name: string,
    role: string,
    avatarUrl: string
  },
  content: {
    type: 'paragraph' | 'link',
    content: string
  } [],
  publisheadAt: Date,
} 

interface Post extends PostProps {  
  id: number,
}

//iteração
const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diogo Fernandes',
      role: 'CTO @ Rocketseat'
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}

    ],
    publisheadAt: new Date('2024-03-27 17:59:32') ,
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'EDUCATOR @ Rocketseat'
    }, 
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}

    ],
    publisheadAt: new Date('2024-04-05 18:36:42') ,
  },
]


export function App() {
  return (
    <div className={ styles.body }>
      <Header />
    
      <div className={styles.wrapper}>
          <Sidebar />     
        <main>

          {posts.map( post => {
            return (
              <Post
                key={ post.id }
                author= { post.author }
                content= { post.content }
                publisheadAt= { post.publisheadAt }
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}



// as chaves são implementadas para receber uma váriavel javascript