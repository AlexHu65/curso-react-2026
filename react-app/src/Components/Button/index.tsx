import { ReactNode } from "react";
// el module CSS permite importar estilos específicos para este componente, 
// evitando conflictos con otros estilos en la aplicación
import styles from './Button.module.css';
import styled from 'styled-components';

type BtnProps = {
    isLoading?: boolean;
};

const Btn = styled.button<BtnProps>`
  margin: 5px;
  background-color: ${props => props.isLoading ? '#6c757d' : '#007bff'};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    onClick?: () => void;
};

// const styles = {
//     button: {
//         margin: '5px',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         border: 'none',
//         padding: '10px 20px',
//         borderRadius: '4px',
//         cursor: 'pointer',
//     },
// };

const Button = ({ children, isLoading, onClick }: Props) => {

    return (
        <Btn
            // estilos en línea para el botón, se pueden personalizar según las necesidades del proyecto
            // style={styles.button}
            disabled={isLoading} 
            onClick={onClick}
            isLoading={isLoading}
            // className={[`btn btn-${isLoading ? 'secondary' : 'default'}`, styles.button, styles.padded].join(' ')}
            // className={[styles.button, styles.padded].join(' ')}>{isLoading ? 'Cargando...' : children}
        >
            {isLoading ? 'Cargando...' : children}
        </Btn>
    );
};

export default Button;