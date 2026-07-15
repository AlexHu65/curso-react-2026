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