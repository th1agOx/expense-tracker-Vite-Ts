import styles from './sidebar.module.css' ;

import { PencilLine } from '@phosphor-icons/react' 
import { Avatar } from './avatar';

export function Sidebar() {
    return (
        <aside className={ styles.sidebar}>
            <img 
            className={ styles.cover } 
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            
            <div className={ styles.profile }>
                < Avatar src="https://github.com/th1agOx.png" />

                <strong>Thiago da Rocha</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    < PencilLine size={19} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}


/*
    < Avatar = componente, hasBorder = propriedade, src = caminho da img />
*/