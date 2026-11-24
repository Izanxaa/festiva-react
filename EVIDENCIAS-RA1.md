# Evidencias RA1

## La tarjeta

La tarjeta enseña el artista, el género y la hora del concierto. Puse los datos juntos en un objeto de `App.jsx` y se los paso a `ConciertoCard`. Para probarlo, cambia el valor de `artista` y comprueba que cambia la tarjeta. Si pulso el botón, aparece un mensaje y el nombre sale en la consola.

## Cómo funciona

Primero se abre `index.html`, que carga `main.jsx`. Ese archivo arranca React y muestra `App`, y desde ahí aparecen la cabecera y la tarjeta. El navegador ejecuta JavaScript; Vite transforma JSX para que el navegador lo entienda. HTML organiza la página, CSS le da estilo y JSX sirve para escribir los componentes.

Lo bueno de React es que puedo separar la página en partes. También ayuda que Vite actualice los cambios rápido. Lo menos bueno es que JSX necesita Vite y, para una página pequeña, puede parecer que hay bastantes archivos.

## Pruebas

Arranqué la página con `npm run dev`, cambié el artista y pulsé el botón. También cambié una llave por un paréntesis para probar qué pasaba. Vite marcó el error en `artista:`; volví a poner la llave y `npm run build` terminó bien.

En Elements se puede mirar el HTML de la tarjeta. Al pulsar el botón, en Console sale el mensaje. En Sources se puede buscar `App.jsx` y en Network, después de recargar, `App.css`. Para ver los datos en React Developer Tools, hay que ir a Components y seleccionar `ConciertoCard`. Ahí se ve la prop `concierto`; en Elements se ve cómo queda la página.

## JavaScript y comentarios

Un script directo se escribe dentro del HTML, por ejemplo `<script>console.log("Hola")</script>`. Un módulo externo, como `main.jsx`, se carga desde el HTML. Un evento como `onClick={manejarClick}` ejecuta una función cuando se pulsa el botón.
