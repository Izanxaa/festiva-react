import { duracion, hora } from "./utils/agenda.js";

function ConciertoCard({ concierto, onAgregar }) {
  function manejarClick() {
    console.log(`Concierto seleccionado: ${concierto.artista}`);
    onAgregar(concierto);
  }

  return (
    <article className="tarjeta-concierto">
      <h2>{concierto.artista}</h2>
      <p>
        <strong>Género:</strong> {concierto.genero}
      </p>
      <p>
        <strong>Hora:</strong> {hora(concierto.inicio)} - {hora(concierto.fin)}
      </p>
      <p>
        <strong>Duración:</strong> {duracion(concierto)} minutos
      </p>
      <button type="button" onClick={manejarClick}>
        Añadir a mi agenda
      </button>
    </article>
  );
}

export default ConciertoCard;
