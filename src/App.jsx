import "./App.css";

import { Pessoas } from "./Data/db";

import Button from "./Components/Button/Index";
import { useState } from "react";

function App() {
  const [pplSort, setPplSort] = useState(Pessoas);

  const handleOnClick = () => {
    const sortedArray = [...pplSort].sort((a, b) => (a.name > b.name ? 1 : -1));
    setPplSort(sortedArray);
  };

  return (
    <>
      <header>
        <h1 className="titulo titulo-hover">Lista de Pessoas</h1>
      </header>
      <main className="App">
        <section>
          <h2 className="subtitulo subtitulo-hover">Pessoas</h2>
          <ul>
            {pplSort?.map((element) => (
              <li key={element.id} className="person__container">
                <p className="texto texto-hover">{element.name}</p>
                <p className="texto texto-hover">Idade: {element.idade}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="button__container">
          <h2 className="subtitulo subtitulo-hover">Ordenar</h2>
          <Button
            value="filtro 1"
            name="filtro1"
            handleOnClick={handleOnClick}
          />
          <Button
            value="filtro 2"
            name="filtro2"
            handleOnClick={handleOnClick}
          />
          <Button
            value="filtro 3"
            name="filtro3"
            handleOnClick={handleOnClick}
          />
          <Button
            value="filtro 4"
            name="filtro4"
            handleOnClick={handleOnClick}
          />
        </section>
      </main>
    </>
  );
}

export default App;
