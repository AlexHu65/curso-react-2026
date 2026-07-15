import Card, {CardBody} from './Components/Card';

function App() {
  return (
    <>
      <Card>
        <CardBody title="Titulo" text="Este es el contenido de la tarjeta" buttonText="Go somewhere" buttonLink="#" />
      </Card>
    </>
  );
}

export default App;