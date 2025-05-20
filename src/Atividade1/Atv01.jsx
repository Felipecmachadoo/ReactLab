import { Link } from "react-router-dom";
import Relogio from "./Relogio";

export default function Atv01() {
  return (
    <>
      <h1>Relógio em tempo real</h1>
      <Relogio />
      <br />
      <Link to="/">Voltar</Link>
    </>
  );
}
