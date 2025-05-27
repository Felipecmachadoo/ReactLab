import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atv01">Atividade 1 - Semana 1</Link>
          </li>
          <li>
            <Link to="/Atv02">Atividade 2 - Semana 2</Link>
          </li>
          <li>
            <Link to="/Atv03">Atividade 3 - Semana 3</Link>
          </li>
          <li>
            <Link to="/Atv04">Atividade 4 - Aula 10</Link>
          </li>
          <li>
            <Link to="/Atv05">Atividade 5 - Semana 5</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
