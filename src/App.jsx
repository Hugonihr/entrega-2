import "./App.css";
import Button from "./Componentes/Boton";
import Navbar from "./Componentes/Navbar";
import ItemListContainer from "./Componentes/ItemListContainer";


function App() {
  return (
    <>
      <Button />
      <Navbar />
      <ItemListContainer msg="Esto es Ruana, la marca de de ropa juvenil chilena."></ItemListContainer>
    </>
  );
}

export default App;
