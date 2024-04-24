import styles from './comment.module.css';

import { Trash } from '@phosphor-icons/react/dist/ssr';
import { ThumbsUp } from '@phosphor-icons/react';
import { Avatar } from './avatar';
import { useState } from 'react';

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void  //forma de adcionar tipagem para as funções
}

export function Comment({content, onDeleteComment }: CommentProps) {
    const [like, setLikeCount] = useState(0) 

// CLOUSURES NO REACT
    function handleLikeCount() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={ styles.comment }>
            < Avatar 
                hasBorder={false} 
                src="https://github.com/maykbrito.png" 
                alt=""

            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={ styles.authorAndTime}>
                            <strong>Mayk Brito</strong>

                            <time title='27 de março ás 16:59h' dateTime='2024-03-27 16:59:32'>
                                Cerca de 2h 
                            </time>
                        </div>

                        <button onClick={ handleDeleteComment } title='Icone para deletar'>
                            < Trash 
                                size={24} 
                            />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button title='like button' onClick={ handleLikeCount }>
                        <ThumbsUp />  Aplaudir <span>{like}</span>
                    </button>
                    
               </footer>

            </div>
        </div>
    )
}




/*
    o like é algo que muda, que aumentar, ou diminuir, então é passado para esse elemento
    o conceito de estado

    É importante sempre iniciar o estado com alguma informação do mesmo tipo
    que será passado para o elemento em que está mudando
    O exemplo disso é próprio like que é tem o valor primariamente zerado


    Todos os eventos que acontecem no React como onClick, onSubmitt precisam receber um
    parametro e que nele seja passsada uma função.
    O react lê a propriedade, depois a função, e ai sim executa oque é interpretado dela
    Então o elemento dentro de um evento não pode ter a presença de uma função que está
    no momento executando algo dentro do parametro como:
    onClick={ handleLike(likeCount + 1)} 

    A execução precisa ocorrer NA FUNÇÃO CHAMADA, e não no parametro passado no evento 
*/