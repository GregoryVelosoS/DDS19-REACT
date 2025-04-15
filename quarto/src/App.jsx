import "./App.css";
import { Outlet } from "react-router-dom";

//Importação do React-Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
