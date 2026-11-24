function ConciertoCard({ concierto, onReservar }) {
  function manejarClick() {
    console.log(`Concierto seleccionado: ${concierto.artista}`);
    onReservar();
  }

  return (
    <article className="tarjeta-concierto">
      <h2>{concierto.artista}</h2>
      <p>
        <strong>Género:</strong> {concierto.genero}
      </p>
      <p>
        <strong>Horario:</strong> {concierto.horario}
      </p>
      <button type="button" onClick={manejarClick}>
        Reservar / Info
      </button>
    </article>
  );
}

export default ConciertoCard;
