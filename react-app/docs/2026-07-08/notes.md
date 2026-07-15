# Notas de React - 2026-07-08

## Tema del día

- Primeros componentes con React.

## Conceptos clave

- Un componente en React es una función que retorna JSX.
- Los componentes se pueden reutilizar e importar en otros archivos.
- `main.tsx` es el punto de entrada donde React se conecta al DOM.
- `App.tsx` suele funcionar como componente principal de la aplicación.
- `StrictMode` ayuda a detectar problemas en desarrollo.

## Como funciona React

- React trabaja con componentes y se enfoca en construir interfaces a partir de piezas pequeñas.
- Cuando cambian los datos o el estado, React vuelve a ejecutar el componente para calcular la nueva interfaz.
- En lugar de modificar todo el DOM a mano, React compara lo que cambió y actualiza solo esa parte.
- Esto hace que el desarrollo sea más ordenado y que la UI sea más fácil de mantener.

## Como renderiza componentes

- El proceso inicia en `main.tsx`, donde `createRoot` toma el elemento `root` del HTML.
- Después, `render(<App />)` le dice a React que monte el componente `App` dentro de ese contenedor.
- `App` puede incluir otros componentes, como `Titulo`, y React los procesa en cadena.
- Cada componente devuelve JSX, y React lo convierte en elementos reales del navegador.
- Si un componente cambia por datos nuevos, React vuelve a renderizar solo ese componente y sus partes necesarias.

## Card reutilizable

- Se creó un componente `Card` reutilizable para no repetir la misma estructura varias veces.
- `Card` ahora recibe `children` como contenido interno, en lugar de una propiedad `body`.
- Dentro del componente se usa desestructuración para obtener `children` desde `props`.
- `Card` envuelve ese contenido con la estructura visual de Bootstrap: `card` y `card-body`.
- `CardBody` quedó como un componente separado y exportado para reutilizar la parte interna de la tarjeta.
- `CardBody` recibe `title`, `text`, `buttonText` y `buttonLink`.
- `text` puede ser opcional para permitir mostrar la tarjeta aun cuando no haya contenido adicional.
- Esta separación ayuda a mantener el código ordenado y hace más fácil cambiar el contenido sin tocar la estructura base.
- El componente reutilizable permite pasar distintos valores y mostrar tarjetas con el mismo diseño.

### `Card.tsx`

```tsx
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function Card(props: Props) {
    const { children } = props;

    return (
        <div className="card" style={{ width: '18rem' }}>
             <div className="card-body">
                <p>{children}</p>
            </div>
        </div>
    );
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


export default Card
```

- `Card` ahora funciona como contenedor y recibe JSX por `children`.
- `CardBody` es un componente exportado aparte para armar solo el contenido interno de la tarjeta.
- `text` está como opcional para mostrar o no el párrafo.
- El código conserva la forma trabajada en clase, pero con una composición más clara entre `Card` y `CardBody`.

### Ejemplo de uso

```tsx
<Card>
  <CardBody
    title="Titulo"
    text="Este es el contenido de la tarjeta"
    buttonText="Go somewhere"
    buttonLink="#"
  />
</Card>
```

- Desde otro componente se envuelve `CardBody` dentro de `Card`.
- React renderiza `children` dentro del contenedor y deja `CardBody` junto con otros elementos como contenido principal.

## Listas con eventos

- Se creó un componente `List` para mostrar una colección de elementos a partir de un arreglo.
- `List` recibe una prop llamada `data` de tipo `string[]`.
- El arreglo se recorre con `map` para pintar cada elemento dentro de un `li`.
- Cada `li` usa una `key` para que React identifique cada elemento de la lista.
- Se agregó un evento `onClick` para mostrar en un `alert` el texto del elemento presionado.
- `MouseEvent` se usa para tipar correctamente el evento del clic.
- Este componente sirve para practicar props, listas y eventos en React.

### `List.tsx`

```tsx
import type { MouseEvent } from 'react';

type Props = {
  data: string[];
};

function List({ data }: Props) {
    const handleClick = (e: MouseEvent) => {
        alert(e.currentTarget.textContent);
    };

    return (
        <div>
        <ul className="list-group">
            {data.map((item, index) => (
            <li 
                onClick={handleClick}
                key={`${index}${item}`} 
                className="list-group-item">{item}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default List;
```

- `data.map(...)` permite renderizar una lista dinámica.
- `handleClick` toma el texto del elemento clickeado y lo muestra en pantalla.
- El componente queda listo para reutilizarse con distintos arreglos.

## Ejemplos / código

### `main.tsx`

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- `createRoot(document.getElementById('root')!)` busca el contenedor principal de la app.
- `render(...)` monta el componente `App` dentro del HTML.

### `App.tsx`

```tsx
import Card, {CardBody} from './Components/Card';
import List from './Components/List';

function App() {
  const listData = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      <Card>
        <CardBody title="Titulo" text="Este es el contenido de la tarjeta" buttonText="Go somewhere" buttonLink="#" />
        <List data={listData} />
      </Card>
    </>
  );
}

export default App;
```

- `App` importa `Card`, `CardBody` y `List`.
- `App` define un arreglo `listData` y lo pasa al componente `List`.
- `App` ya no usa `Titulo` en esta versión, sino una tarjeta compuesta con una lista dentro.
- El fragment `<>...</>` permite devolver varios elementos sin agregar un contenedor extra.

### `Titulo.tsx`

```tsx
function Titulo() {
  const nombre = 'Alex';
  if (nombre) {
    return <h1>Hola {nombre}</h1>
  } else {
    return <h1>Hola desconocido</h1>
  }

}

export default Titulo;
```

- Se declara una variable con `const`.
- Se usa una condición `if/else` para mostrar texto distinto según exista un nombre.
- La interpolación `{nombre}` inserta el valor dentro del JSX.

## Dudas

- 

## Tareas pendientes

- Practicar crear otro componente y pasarlo dentro de `App`.
