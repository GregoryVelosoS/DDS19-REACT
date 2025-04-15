// Importação dos componentes do Bootstrap
import Table from "react-bootstrap/Table";

const Tabela = () => {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tabela;
