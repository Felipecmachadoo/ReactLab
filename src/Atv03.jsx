import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import TodoList from "./TodoList";
import PackingList from "./PackingList";
import List from "./Apps";
import TeaGathering from "./Cup";

export default function AtvUi() {
  return (
    <>
      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
      <br />

      <Gallery />
      <br />

      <TodoList />
      <br />

      <PackingList />
      <br />

      <List />
      <br />

      <TeaGathering />
      <br />

      <Link to="/">Retornar a Página Inicial</Link>
      <br />
      <br />
    </>
  );
}
