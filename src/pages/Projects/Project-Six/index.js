import "../../global.scss";
import { TextField } from "@mui/material";
import iconbuscar from '../../../Assets/icon-buscar.svg'
import Component from "./component";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Project() {
  const navigate = useNavigate()
  return (
    <main className="center-main">
      <section className="FindRecord">
        <Button onClick={() => navigate('/')} startIcon={<ArrowBackIcon />}>Back</Button>
        <div className="Search">
          <h1>Busca em registros</h1>
          <div className="Search-Header">
            <input type="text" placeholder="Buscar Items"></input>
            <img src={iconbuscar}/>
          </div>
        </div>
        <div className="Result">
          <table className="Result-Header">
            <tr className="Tr-Header">
              <th>Identificação</th>
              <th>Nome</th>
              <th>E-Mail</th>
              <th>Início</th>
              <th>Faixa</th>
            </tr>
              <Component/>
              <Component/>
              <Component/>
              <Component/>
          </table>
        </div>
      </section>
    </main>
  );
}
