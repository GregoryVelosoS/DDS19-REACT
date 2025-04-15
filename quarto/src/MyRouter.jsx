import { createBrowserRouter } from "react-router-dom";

//Importação das páginas
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Cadastro from "./components/Cadastro.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
    ],
  },
]);

export default router;
