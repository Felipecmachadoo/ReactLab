import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div
      style={{ fontSize: "3rem", fontFamily: "monospace", textAlign: "center" }}
    >
      {hora}
    </div>
  );
}

export default Relogio;
