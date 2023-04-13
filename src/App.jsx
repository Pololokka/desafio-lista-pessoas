import "./App.css";

import { Pessoas } from "./Data/db";

function App() {
  return (
    <>
      <header>
        <h1 className="titulo titulo-hover">Lista de Pessoas</h1>
      </header>
      <main className="App">
        <section>
          {Pessoas?.map((element) => (
            <div className="person__container">
              <p className="texto texto-hover">{element.name}</p>
              <p className="texto texto-hover">Idade: {element.idade}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="subtitulo subtitulo-hover">Ordenar</h2>
        </section>
      </main>
    </>
  );
}

export default App;
