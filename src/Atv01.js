import { Link } from "react-router-dom";
import Relogio from "./Relogio";

export default function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            <br />
            <Link to="/">Retornar a Página Inicial</Link>
        </>
    )
}
