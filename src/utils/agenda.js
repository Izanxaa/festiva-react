export function hora(minutos) {
  const horas = Math.floor(minutos / 60);
  const resto = minutos % 60;

  return `${String(horas).padStart(2, "0")}:${String(resto).padStart(2, "0")}`;
}

export function duracion(concierto) {
  return concierto.fin - concierto.inicio;
}

// Si uno empieza justo cuando acaba el otro, no se solapan.
export function solapan(conciertoA, conciertoB) {
  return conciertoA.inicio < conciertoB.fin &&
    conciertoB.inicio < conciertoA.fin;
}

export function motivoRechazo(concierto, agenda) {
  if (agenda.some((item) => item.id === concierto.id)) {
    return "Ese concierto ya está en la agenda.";
  }

  const conciertoSolapado = agenda.find((item) =>
    solapan(item, concierto),
  );

  if (conciertoSolapado) {
    return `Se solapa con ${conciertoSolapado.artista}.`;
  }

  return null;
}

export function minutosTotales(ids, listaConciertos) {
  let total = 0;

  // Busco cada id y sumo la duración del concierto.
  for (const id of ids) {
    const concierto = listaConciertos.find((item) => item.id === id);

    if (concierto === undefined) {
      throw new Error(`No existe un concierto con el id ${id}.`);
    }

    total += duracion(concierto);
  }

  return total;
}
