import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./Atividade1/Atv01";
import Atv02 from "./Atividade2/Atv02";
import Atv03 from "./Atividade3/Atv03";
import Atv04 from "./Atividade4/Atv04";
import Atv05 from "./Atividade5/Atv05";
import Atv06 from "./Atividade6/Atv06";

export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atv01" element={<Atv01 />} />
        <Route path="/atv02" element={<Atv02 />} />
        <Route path="/atv03" element={<Atv03 />} />
        <Route path="/atv04" element={<Atv04 />} />
        <Route path="/atv05" element={<Atv05 />} />
        <Route path="/atv06" element={<Atv06 />} />
      </Routes>
    </BrowserRouter>
  );
}
