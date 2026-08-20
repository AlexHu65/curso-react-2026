import Button from './Components/Button';
import Card, {CardBody} from './Components/Card';
import List from './Components/List';
import { useState } from 'react';

function App() {

  // const [isLoading, setIsLoading] = useState(false);

  // const handleSelect = (item: string) => {
  //   console.log('Item seleccionado:', item);
  // };

  // const handleClick = () => {
  //   setIsLoading(!isLoading);
  // };

  // const listData: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gohan', 'Piccolo'];

  // // const contenido = listData.length ? <List data={listData} onSelect={handleSelect} /> : 'Sin elementos';
  // const contenido = listData.length !== 0 && (<List data={listData} onSelect={handleSelect} />);

  // return (
  //   <>
  //     <Card>
  //       {/* {listData.length  && 'mi lista'} */}
  //       <CardBody title="Titulo" text="Este es el contenido de la tarjeta" buttonText="Go somewhere" buttonLink="#" />
  //       {contenido}
  //       <Button isLoading={isLoading} onClick={handleClick}>Hola mundo</Button>
  //     </Card>
  //   </>
  // );

  const [data, setData] = useState(['Goku', 'Vegeta', 'Trunks', 'Gohan', 'Piccolo']);

  const addMinion = () => {
    setData([...data, 'Minion']);
  };

  const removeMinion = () => {
    if (data.length > 0) {
      setData(data.slice(0, data.length - 1));
    }
  };

  return (
    <>
      <Card>
        <Button onClick={addMinion}>Agregar Item</Button>
        <Button onClick={removeMinion}>Eliminar Item</Button>
        <br></br>
        <List data={data}/>
      </Card>
    </>
  );
}

export default App;