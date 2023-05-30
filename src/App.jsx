import "./App.css";

import { Pessoas } from "./Data/db";
import { useState } from "react";
import {
  handleSortReset,
  handleAlpha,
  handleReverseAlpha,
  handleNumeric,
  handleReverseNumeric,
} from "./Functions/sort";

import Button from "./Components/Button/Index";

function App() {
  const [pplSort, setPplSort] = useState(Pessoas);

  return (
    <>
      <header>
        <h1 className="titulo titulo-hover">Lista de Pessoas</h1>

        <section>
          <h2 className="subtitulo subtitulo-hover">Ordenar</h2>
          <div className="button__container-header">
            <Button
              value="Exibição Padrão"
              name="resetSort"
              handleOnClick={() => handleSortReset(setPplSort, Pessoas)}
            />
            <Button
              value="Alfabética"
              name="filtro1"
              handleOnClick={() => handleAlpha(pplSort, setPplSort)}
            />
            <Button
              value="Contra Alfabética"
              name="filtro2"
              handleOnClick={() => handleReverseAlpha(pplSort, setPplSort)}
            />
            <Button
              value="Crescente - Idade"
              name="filtro3"
              handleOnClick={() => handleNumeric(pplSort, setPplSort)}
            />
            <Button
              value="Decrescente - Idade"
              name="filtro4"
              handleOnClick={() => handleReverseNumeric(pplSort, setPplSort)}
            />
          </div>
        </section>
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
        <section className="button__container-main">
          <h2 className="subtitulo subtitulo-hover">Ordenar</h2>
          <Button
            value="Exibição Padrão"
            name="resetSort"
            handleOnClick={() => handleSortReset(setPplSort, Pessoas)}
          />
          <Button
            value="Crescente - Nome"
            name="filtro1"
            handleOnClick={() => handleAlpha(pplSort, setPplSort)}
          />
          <Button
            value="Decrescente - Nome"
            name="filtro2"
            handleOnClick={() => handleReverseAlpha(pplSort, setPplSort)}
          />
          <Button
            value="Crescente - Idade"
            name="filtro3"
            handleOnClick={() => handleNumeric(pplSort, setPplSort)}
          />
          <Button
            value="Decrescente - Idade"
            name="filtro4"
            handleOnClick={() => handleReverseNumeric(pplSort, setPplSort)}
          />
        </section>
      </main>
    </>
  );
}

export default App;
