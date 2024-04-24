import { Avatar } from './avatar';
import { Comment } from './comment';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { FormEvent, ChangeEvent, InvalidEvent, useState } from 'react';

import styles from './Post.module.css';

//TYPESCRIPT
interface Author {
    name: string,
    role: string,
    avatarUrl: string

}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

interface PostProps {
    author: Author,
    publisheadAt: Date,
    content: Content[], //content = array de objetos ; type <p> ou <a> ; conteudo de entrada string 
}

export function Post( {author, publisheadAt, content}: PostProps ) {

    const [comments, setComments] = useState([
       'Post muito bacana hein?!'
    ]) 

    const [newCommentText, setNewCommentText] = useState('')



    function handleCreatNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText ])
        
        setNewCommentText('')
    }
    

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('') //função prototype do input

        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é Obrigatório! ')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete //false
        })

        setComments(commentsWithoutDeletedOne)
    }

    const publisheadDateFormatted = format(publisheadAt, "d 'de' LLLL 'ás' HH:mm'h' ", {
        locale: ptBR,
    })
    
    const publisheadDateRelativeToNow = formatDistanceToNow(publisheadAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const isCommentEmpty = newCommentText.length === 0;


    return(
        <article className={ styles.Post }>
            <header>
                <div className={ styles.author }>
                    <Avatar src={ author.avatarUrl }  />
                    <div className={styles.authorinfo}>
                        <strong>{author.name } </strong>
                        <span>{ author.role } </span>
                    </div>
                </div>
                
                <time title={ publisheadDateFormatted } dateTime={ publisheadAt.toISOString()}>
                    {publisheadDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
               { content.map( line => {
                if( line.type === 'paragraph') {
                    return <p key={line.content} >{line.content}</p>
                } else if( line.type === 'link') {
                    return <p key={line.content} ><a href="#">{line.content}</a></p>
                }
               }) }
            </div>

            <form onSubmit={handleCreatNewComment} className={ styles.comentForm }>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                
                <footer>
                    <button type='submit' disabled={isCommentEmpty}> 
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={ styles.commentList }>
              { comments.map( comment => {
                return (
                <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment} 
                /> 
                ) 
              }) }
            </div>
        </article>
    )
}







/*
    A desestruturação pode ocorrer quando uma propiedade se repete muito na aplicação,
    assim passo o elemento mais usado e boto ele como parametro da função entre cheves.

    Elemento na tag time não é uma string pois recebe parametros de datas. 
    Com elementos desse tipo, é preciso importar uma API( MDN intlDateTimeFormat ) ou 
    uma BIBLIOTECA( date-fns ) 

    ToISOString é uma API externa do javascript  

    type submit é o comportamento de envio, enter no botão

    ... => spred operator, é reposável por pegar todo o conteudo de uma variavel


    EXISTE um conceito chamado IMUTABILIDADE, que nos diz que as váriaveis não sofrem 
    mutação, porém é criado um novo espaço na memória, sendo criado um novo valor
    esse conceito ocorre na exclusão de comentarios, isso ajuda na performace 
    
    Para alterar uma variavel, é preciso criar um novo array, 
    e nessa nova função propor uma nova funcionalidade a variavel

    FILTER  é uma propriedade do javaScript que sempre retorna para um elemento
    no array false ou true, sendo removido ou adcionado da minha estrutura

    REQUIRED validada o input, só permitindo o subimit se adcionado algum elemento 

    onInvaled chamada sempre que o html indentificar que foi tentado um submit 
    com uma tentativa não valida ao input nesse caso sem adcionar nenhum comentário 

    target = onde está acontecendo um evento 
    setCustomValidity = é o metodo que fica no prototype da textarea que passa a ela
    a mensagem de validação a qualquer tipo de tentativa de evento

    A cada elemento ESCRITO nas propriedades que recebem um estado são RENDERIZADOS 
    de novo e de novo, ou seja cada click na text area na area de comentario será 
    renderizado 

    Disable = propriedade de habilitação de butão que recebe true ou false

    todas as funções de evento, precisar ser setadas como primeiro parametro o event
    Como no typescript, é preciso passar o caminho com que cada ação ocorre, e o meu evento
    que acontece na textarea é um submitt. Foi importado um FormEvent e passada como 
    parâmetro da minha função 

    O typescript, também passa p mim todas as informações dentro da função que está sendo
    atribuida um caminho
    A IDE fica inteligente

    Nas tags de evento no onChange é importado o ChangeEvent  
    e informar para o TS no parâmentro da função, onde ocorre que está ocorrendo o evento 
    entre <> sinal de maior e menor
    
    No ts quando um type pode receber dois tipos no seu conteudo, é passado na interface 
    -> type : 'paragraph' | 'link' ( tipo1 ou tipo2 )
*/