import "./App.css";

import { Pessoas } from "./Data/db";

import Button from "./Components/Button/Index";
import { useState } from "react";

function App() {
  const [pplSort, setPplSort] = useState(Pessoas);

  const handleSortReset = () => {
    setPplSort(Pessoas);
  };

  const handleAlpha = () => {
    const sortedArray = [...pplSort].sort((a, b) => (a.name > b.name ? 1 : -1));
    setPplSort(sortedArray);
  };

  const handleReverseAlpha = () => {
    const sortedArray = [...pplSort].sort((a, b) => (a.name < b.name ? 1 : -1));
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
            value="Exibição Padrão"
            name="resetSort"
            handleOnClick={handleSortReset}
          />
          <Button
            value="Crescente - Nome"
            name="filtro1"
            handleOnClick={handleAlpha}
          />
          <Button
            value="Decrescente - Nome"
            name="filtro2"
            handleOnClick={handleReverseAlpha}
          />
          <Button value="filtro 3" name="filtro3" handleOnClick={handleAlpha} />
          <Button value="filtro 4" name="filtro4" handleOnClick={handleAlpha} />
        </section>
      </main>
    </>
  );
}

export default App;
