import React, { useState, useEffect } from "react";

export default function Letreiro() {
  const textoCompleto = "Conheça a Fatec";
  const [texto, setTexto] = useState("");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTexto((prev) => prev + textoCompleto.charAt(indice));
      setIndice((prev) => prev + 1);
    }, 150);

    if (indice === textoCompleto.length) {
      setTimeout(() => {
        setTexto("");
        setIndice(0);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [indice]);

  return (
    <div
      style={{ fontSize: "2rem", fontFamily: "monospace", textAlign: "center" }}
    >
      {texto}
    </div>
  );
}
