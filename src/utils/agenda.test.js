import assert from "node:assert/strict";
import test from "node:test";
import { conciertos } from "../data/conciertos.js";
import {
  hora,
  minutosTotales,
  motivoRechazo,
  solapan,
} from "./agenda.js";

test("muestra la hora y calcula el total pedido", () => {
  assert.equal(hora(1100), "18:20");
  assert.equal(minutosTotales([1, 3, 4, 6, 7], conciertos), 225);
});

test("rechaza solapamientos e ids repetidos", () => {
  const uno = conciertos.find((concierto) => concierto.id === 1);
  const dos = conciertos.find((concierto) => concierto.id === 2);
  const tres = conciertos.find((concierto) => concierto.id === 3);

  assert.equal(solapan(uno, dos), true);
  assert.equal(solapan(uno, tres), false);
  assert.match(motivoRechazo(uno, [uno]), /ya está/);
  assert.match(motivoRechazo(dos, [uno]), /solapa/);
  assert.equal(motivoRechazo(tres, [uno]), null);
});

test("los filtros encuentran BRUMA indie y no BRUMA rock", () => {
  const brumaIndie = conciertos.filter(
    (concierto) =>
      concierto.artista === "BRUMA" && concierto.genero === "indie",
  );
  const brumaRock = conciertos.filter(
    (concierto) =>
      concierto.artista === "BRUMA" && concierto.genero === "rock",
  );

  assert.equal(brumaIndie.length, 1);
  assert.equal(brumaRock.length, 0);
});
