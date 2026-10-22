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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  const MAX_ITEMS: number = 10;
  const MIN_ITEMS: number = 1;
  const TIMEOUT: number = 500;

  const addMinion = () => {
    if (data.length >= MAX_ITEMS) {
      alert('No se pueden agregar más elementos');
      return;
    }
    setIsLoadingAdd(true);
    setTimeout(() => {
      setData([...data, 'Minion']);
      setIsLoadingAdd(false);
    }, TIMEOUT);
  };

  const removeMinion = () => {
    if (data.length > MIN_ITEMS) {
      setIsLoading(true);
      setTimeout(() => {
        setData(data.slice(0, data.length - 1));
        setIsLoading(false);
      }, TIMEOUT);
    } else {
      alert('No se puede eliminar el último elemento');
    }
  };

  return (
    <>
      <Card>
        <Button isLoading={isLoadingAdd} onClick={addMinion}>Agregar Item</Button>
        <Button isLoading={isLoading} onClick={removeMinion}>Eliminar Item</Button>
        <br></br>
        <List data={data}/>
      </Card>
    </>
  );
}

export default App;