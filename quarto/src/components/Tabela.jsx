// Importação dos componentes do Bootstrap
import Table from "react-bootstrap/Table";

import {getFuncionarios} from "../hooks/useApi.js"

const Tabela = () => {

  const funcionarios = getFuncionarios()
  console.log("Funcionários recebidos:", funcionarios)

  return (
    <div  style={{ width: "90%", margin: "auto" }}>
      <h1>Tabela</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) =>(
            <tr key={funcionario.id}>
              <td>{funcionario.id}</td>
              <td>{funcionario.nome}</td>
              <td>{funcionario.email}</td>
              <td>{funcionario.tipo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabela;
