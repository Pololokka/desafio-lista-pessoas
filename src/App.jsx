import "./App.css";

import { Pessoas } from "./Data/db";

import Button from "./Components/Button/Index";

function App() {
  const handleOnClick = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <header>
        <h1 className="titulo titulo-hover">Lista de Pessoas</h1>
      </header>
      <main className="App">
        <section>
          <h2 className="subtitulo subtitulo-hover">Pessoas</h2>

          {Pessoas?.map((element) => (
            <div key={element.id} className="person__container">
              <p className="texto texto-hover">{element.name}</p>
              <p className="texto texto-hover">Idade: {element.idade}</p>
            </div>
          ))}
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
