import styles from './header.module.css';

import Ignitelogo from '../assets/Ignite-logo.svg';

/* PARA LEVAR A CLASSE DO CSS (do arquivo jsx) PARA O ARQUIVO É PRECISO NOMEALO ENTRE CHAVES 
E TRAZER O NOME DA PROPRIA CLASSE CSS */

export function Header() {
    return(
        <header className={styles.header}>
            <img src={Ignitelogo} alt="logo do ignite" />
            <strong>Ignite Feed</strong>
        </header>
    );
}