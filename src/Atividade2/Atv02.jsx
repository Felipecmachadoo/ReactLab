import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";

function Atv02() {
  return (
    <>
      <h1>Letreiro Animado</h1>
      <Letreiro />
      <br />
      <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv02;
