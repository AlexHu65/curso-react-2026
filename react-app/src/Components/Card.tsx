import type { ReactNode } from "react";

// se puede usar esatoimport Fragment from 'react';
interface Props {
    // Children es una propiedad especial en React que representa el contenido 
    // que se pasa entre las etiquetas de un componente. 
    // En este caso, se espera que sea de tipo string.
    children: ReactNode; // Definición de la propiedad 'body' que es de tipo string
}

function Card(props: Props) {
    const { children } = props; // Desestructuración de props para obtener el contenido del cuerpo de la tarjeta

    return(
        <div className="card" style={{ width: '18rem' }}>
             <div className="card-body">
                <p>{children}</p>
             </div>
        </div>
    );
    // // Se agrega al componente ya que pide un objeto
    // const styles = {
    //     card: {
    //         width: '18rem',
    //     },
    // };
    // Retorna el componente Card con estilos en línea y clases de Bootstrap
    // return (
    //     // En algunas versiones de React, se puede usar Fragment para envolver múltiples elementos 
    //     // sin agregar un nodo adicional al DOM.
    //     <>
    //         <CardBody title="Titulo" text={children} buttonText="Go somewhere" buttonLink="#" />
    //         {/* { body } */}
    //         {/* Hola mundo */}
    //         {/* <CardBody /> */}
    //     </>
    // );
}


interface CardBodyProps {
    title: string;
    text?: string;
    buttonText: string;
    buttonLink: string;
}

export function CardBody(props: CardBodyProps) {
     const { title, text, buttonText, buttonLink } = props;
      return (
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {text && <p className="card-text">{text}</p>}
                <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
            </div>
      );

 }


export default Card;
