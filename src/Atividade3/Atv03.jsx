import { Link } from "react-router-dom";
import React, { useState } from "react";
import CounterApp from "./CounterApp";
import Display from "./Display";
import ResetButton from "./ResetButton";
import "../styles/CounterApp.css";

function App() {
  const [menCount, setMenCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);

  const total = menCount + womenCount;

  const resetCounts = () => {
    setMenCount(0);
    setWomenCount(0);
  };

  return (
    <div className="container">
      <Display total={total} />
      <div className="counter-container">
        <CounterApp
            name="Homens"
            imageSrc="https://cdn-icons-png.flaticon.com/512/1995/1995579.png"
            count={menCount}
            setCount={setMenCount}
        />
        
        <CounterApp
            name="Mulheres"
            imageSrc="https://cdn-icons-png.flaticon.com/512/1995/1995577.png"
            count={womenCount}
            setCount={setWomenCount}
        />
      </div>
      <ResetButton onClick={resetCounts} />
      <Link to="/" className="voltar">Voltar</Link>
    </div>
  );
}

export default App;
