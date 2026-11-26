# Evidencias RA2

## Variables y valores

En los JavaScript uso `const` cuando no voy a reasignar una variable y `let` cuando sí puede cambiar, como el total de minutos. Los dos se quedan dentro del bloque de llaves. `var` es más antiguo y funciona dentro de la función donde se declara, no solo dentro del bloque.

JavaScript puede guardar textos, números, valores verdaderos o falsos, objetos y listas. `null` lo uso para decir que no hay un valor. `undefined` suele salir cuando algo no se ha definido.

## Operadores y bucles

`+`, `-`, `*` y `/` sirven para hacer cuentas, y `%` da el resto de una división. `=` guarda un valor, `===` compara, `&&` pide que se cumplan dos condiciones y `||` permite que valga una u otra. El ternario escoge entre dos opciones: `cantidad === 0 ? "Vacía" : "Con conciertos"`.

En `agenda.js` uso `for...of` para recorrer los ids y sumar minutos. Un bucle normal con incremento sería `for (let i = 0; i < lista.length; i++)`. También hay un comentario de línea y otro de bloque en ese archivo.

Por ejemplo, `hora(minutos)` recibe `minutos` como parámetro y devuelve la hora en texto. `duracion(concierto)` recibe un concierto y devuelve un número. En cambio, `quitarConcierto(id)` cambia la agenda y no devuelve un resultado útil.

## Agenda y pruebas

Los conciertos están en `src/data/conciertos.js`. La lógica de las horas y de los solapamientos está en `src/utils/agenda.js`. Al buscar se juntan los filtros de artista y género. La lista se ordena con una copia para no cambiar los datos originales. El contador sale de `agenda.length`.

Al añadir uso una copia del array y al quitar uso `filter`, así no cambio el array original. Si el id ya está o el horario se solapa, la agenda muestra el motivo y no añade el concierto.

Probé lo que indica el enunciado `hora(1100)` y devuelve `18:20`. Los ids `[1, 3, 4, 6, 7]` suman 225 minutos. BRUMA con indie da un resultado y con rock ninguno. También están las pruebas de solapamiento, ids repetidos y horarios compatibles.

Los botones usan clic, los campos cambian con `onChange` y el formulario se envía con `onSubmit`. Esas funciones cambian el estado de React, no devuelven un resultado útil.