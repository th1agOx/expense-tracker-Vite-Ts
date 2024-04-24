import { ImgHTMLAttributes } from 'react' ; 
import styles from './Avatar.module.css'


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean,
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props} 
        />
    );
}



/*
    imgHTMLAttributes -> interface do ts com todas as propriedades que a tag img pode receber
    esse tipo de extenção é trazido atraves de interfaces do typescript, tendo que entre <>
    dizer o local da implementação das tipagens

    As extenções importadas, são arquivos com suas proprias interfaces de uso
    podendo ser uma biblioteca, api  
*/ ;
/*
    REST operator
    Se eu quero setar todas as propriedades restantes nos parametros da minha função
    eu posso usar o meu objeto de propriedades ...props (rest)

    SPRED operator
    {...props}]

    A extenção importada para a imagem me permite ter todas as propriedades da TAG image 
    Dentro do meu objeto props por conta do REST operator 
    Que entra na minha função pelo SPREAD operator
*/