import App from "./Toolbar/App";
import AppGallery from "./Gallery/AppGallery";
import Counter from "./Counter/Counter";
import Form from "./Form/Form";
import MovingDot from "./MovingDot/MovingDot";
import Form2 from "./Form2/Form2";
import Form3 from "./Form3/Form3";
import List from "./List/List";
import List2 from "./List2/List2";
import List3 from "./List3/List3";
import { Link } from "react-router-dom";

export default function Atv05() {
  return (
    <>
      <App />
      <br />
      <br />

      <AppGallery />
      <br />
      <br />

      <Counter />
      <br />
      <br />

      <Form />
      <br />
      <br />

      <MovingDot />
      <br />
      <br />

      <Form2 />
      <br />
      <br />

      <Form3 />
      <br />
      <br />

      <List />
      <br />
      <br />

      <List2 />
      <br />
      <br />

      <List3 />
      <br />
      <br />

      <Link to="/">Voltar</Link> <br/><br/>
    </>
  );
}
