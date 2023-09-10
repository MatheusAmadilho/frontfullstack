import { Button, Container, Table } from "react-bootstrap";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import "./TabelaDenuncia.css";
import { urLBase } from "../util";


export  function TabelaAdocao(props) {



 
  return (
    <Container className="container-table-denuncia body">


      <Table>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Adotante</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.listadeadocoes?.map((adocao) => {
            const dataFormatada = new Date(adocao.data).toLocaleDateString();
            return (
              <tr key={adocao.codag}>
                <td>{adocao.animal.nome}</td>
                <td>{adocao.adotante}</td>
                <td>{dataFormatada}</td>
                <td>
                  <div className="botoes">
                    <Button
                      className="botao_table"
                    onClick={() => {
                      props.editarAdocao(adocao)
                    }}
                    ><FaEdit />
                    </Button>
                    <Button
                      className="botao_table"
                      onClick={() => {
                        if (window.confirm("Confirma a exclusão desta adoção?")){
                          props.excluirAdocao(adocao)
                        }
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
