import { Link } from "react-router-dom";
import Gallery from "./Gallery";

export default function Atv03() {
  return (
    <>
      <h1>Galeria de Imagens</h1>
      <Gallery />
      <br />
      <Link to="/">Voltar</Link>
    </>
  );
}
