function Titulo() {
  const nombre = 'Alex';
  if (nombre) {
    return <h1>Hola {nombre}</h1>
  } else {
    return <h1>Hola desconocido</h1>
  }

}

export default Titulo;