import { useState } from "react";
import Cabecera from "./Cabecera.jsx";
import ConciertoCard from "./ConciertoCard.jsx";
import { conciertos } from "./data/conciertos.js";
import { minutosTotales, motivoRechazo } from "./utils/agenda.js";
import "./App.css";

function App() {
  const [agenda, setAgenda] = useState([]);
  const [artistaBuscado, setArtistaBuscado] = useState("");
  const [generoBuscado, setGeneroBuscado] = useState("");
  const [filtros, setFiltros] = useState({ artista: "", genero: "" });
  const [mensaje, setMensaje] = useState("");

  function buscarConciertos(evento) {
    evento.preventDefault();
    setFiltros({
      artista: artistaBuscado.trim().toLowerCase(),
      genero: generoBuscado,
    });
    setMensaje("Búsqueda aplicada.");
  }

  function agregarConcierto(concierto) {
    const motivo = motivoRechazo(concierto, agenda);

    if (motivo !== null) {
      setMensaje(motivo);
      return;
    }

    setAgenda([...agenda, concierto]);
    setMensaje(`${concierto.artista} añadido a la agenda.`);
  }

  function quitarConcierto(id) {
    setAgenda(agenda.filter((concierto) => concierto.id !== id));
    setMensaje("Concierto quitado de la agenda.");
  }

  const conciertosFiltrados = conciertos.filter((concierto) => {
    const artistaCoincide = concierto.artista
      .toLowerCase()
      .includes(filtros.artista);
    const generoCoincide =
      filtros.genero === "" || concierto.genero === filtros.genero;

    return artistaCoincide && generoCoincide;
  });

  const conciertosOrdenados = [...conciertosFiltrados].sort(
    (a, b) => a.inicio - b.inicio,
  );
  const agendaOrdenada = [...agenda].sort((a, b) => a.inicio - b.inicio);
  const cantidad = agenda.length;
  const totalMinutos = minutosTotales(
    agenda.map((concierto) => concierto.id),
    conciertos,
  );

  return (
    <div className="contenedor">
      <Cabecera />
      <main>
        <section>
          <h2>Buscar conciertos</h2>
          <form className="filtros" onSubmit={buscarConciertos}>
            <label>
              Artista
              <input
                type="text"
                value={artistaBuscado}
                onChange={(evento) => setArtistaBuscado(evento.target.value)}
              />
            </label>
            <label>
              Género
              <select
                value={generoBuscado}
                onChange={(evento) => setGeneroBuscado(evento.target.value)}
              >
                <option value="">Todos</option>
                <option value="indie">Indie</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="electrónica">Electrónica</option>
              </select>
            </label>
            <button type="submit">Buscar</button>
          </form>

          <div className="lista-conciertos">
            {conciertosOrdenados.length === 0 ? (
              <p>No hay conciertos con esos filtros.</p>
            ) : (
              conciertosOrdenados.map((concierto) => (
                <ConciertoCard
                  key={concierto.id}
                  concierto={concierto}
                  onAgregar={agregarConcierto}
                />
              ))
            )}
          </div>
        </section>

        <section className="mi-agenda">
          <h2>Mi agenda ({cantidad})</h2>
          <p>
            {cantidad === 0
              ? "Todavía no has añadido conciertos."
              : `Duración total: ${totalMinutos} minutos.`}
          </p>
          <ul>
            {agendaOrdenada.map((concierto) => (
              <li key={concierto.id}>
                {concierto.artista}{" "}
                <button
                  type="button"
                  onClick={() => quitarConcierto(concierto.id)}
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        </section>

        <p className="mensaje" role="status" aria-live="polite">
          {mensaje}
        </p>
      </main>
    </div>
  );
}

export default App;
