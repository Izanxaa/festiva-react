import { useState } from "react";
import Cabecera from "./Cabecera.jsx";
import ConciertoCard from "./ConciertoCard.jsx";
import "./App.css";

function App() {
  const datosConcierto = {
    // Cambia el artista para probar la tarjeta.
    artista: "The Weeknd",
    genero: "Pop",
    horario: "22:30 - 00:00",
  };

  const [mensaje, setMensaje] = useState("");

  function mostrarMensaje() {
    setMensaje(`Has seleccionado el concierto de ${datosConcierto.artista}.`);
  }

  return (
    <div className="contenedor">
      <Cabecera />
      <main>
        <ConciertoCard
          concierto={datosConcierto}
          onReservar={mostrarMensaje}
        />
        <p className="mensaje" role="status" aria-live="polite">
          {mensaje}
        </p>
      </main>
    </div>
  );
}

export default App;
