# Notas de React - 2026-08-21

## Tema del día

- Componentes reutilizables con estado, eventos y estilos aislados.

## Cambios principales

- Se creó un componente `Button` dentro de `src/Components/Button/` para separar su lógica y sus estilos.
- El botón ahora recibe `children`, `isLoading` y `onClick` como props.
- Mientras `isLoading` es `true`, el botón se deshabilita y muestra el texto `Cargando...`.
- Se combinó `styled-components` con un `Button.module.css` para practicar dos formas de estilado en React.
- `App.tsx` ahora maneja una lista de personajes con `useState`.
- Se agregaron dos acciones: `addMinion` para agregar elementos y `removeMinion` para quitar el último.
- Las acciones usan `setTimeout` de `500ms` para simular carga antes de actualizar el estado.
- Se definieron límites para la lista:
  - `MAX_ITEMS = 10` para evitar agregar más elementos.
  - `MIN_ITEMS = 1` para evitar borrar el último elemento.
- `List.tsx` ahora acepta una prop opcional `onSelect` y marca visualmente el elemento activo.
- `main.tsx` sigue montando la app con `StrictMode`, y la importación de Bootstrap quedó comentada.

## Componentes / archivos

- `src/App.tsx`
- `src/Components/Button/index.tsx`
- `src/Components/Button/Button.module.css`
- `src/Components/List.tsx`
- `src/Components/Card.tsx`
- `src/main.tsx`
- `package.json`

## Cómo quedó armado

- `App` envuelve todo dentro de `Card`.
  - Dentro de `Card` se muestran dos botones:
    - `Agregar Item`
    - `Eliminar Item`
- Debajo se renderiza `List` con el arreglo `data`.
- Al agregar, se añade el texto `Minion` al final del arreglo.
- Al eliminar, se quita el último elemento de la lista.
- Si la lista llega al máximo permitido, se muestra una alerta.
- Si solo queda un elemento, también se evita borrarlo con una alerta.

## Ejemplo de uso

```tsx
<Card>
  <Button isLoading={isLoadingAdd} onClick={addMinion}>Agregar Item</Button>
  <Button isLoading={isLoading} onClick={removeMinion}>Eliminar Item</Button>
  <List data={data} />
</Card>
```

## Tareas pendientes

- Revisar `CardBody`, porque su interfaz todavía incluye `buttonText` y `buttonLink`, pero en la implementación actual no se renderizan.
- Unificar el enfoque de estilos del botón si se quiere evitar mezclar `styled-components` con CSS Modules.
- Decidir si la lista debe recibir `onSelect` desde `App` para aprovechar el estado activo de `List`.
