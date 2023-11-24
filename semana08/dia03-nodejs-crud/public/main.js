import { renderPeliculas } from "./peliculas.js"
import { fetchPeliculas, createPelicula } from "./services.js"
/***************************************************************/
/* EJEMPLO USANDO PROMESAS */
// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     fetchPeliculas()
//     .then(peliculas =>{
//         console.log(peliculas);
//         // Aqui rendereizaremos las peliculas
//     })
//   });
/****************************************************************/
const peliculasForm = document.getElementById("peliculasForm");

peliculasForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  // console.log('Creando una nueva película...')

  const peliculaForm = document.forms["peliculasForm"];

  console.log(peliculaForm);

  const nombre = peliculaForm.nombre.value;
  const imagen = peliculaForm.imagen.value;
  const estreno = peliculaForm.estreno.value;
  const genero = peliculaForm.genero.value; // Este campo es del tipo cadena por defecto
  const resumen = peliculaForm.resumen.value;

  console.log({ nombre, imagen, estreno, genero, resumen });

  const nuevaPelicula = {
    nombre,
    imagen,
    estreno,
    generoId: Number(genero),
    resumen
  };
  console.log(nuevaPelicula);

  const response = await createPelicula(nuevaPelicula);

  
  console.log(response)
});
/****************************************************************/

/* EJEMPLO USANDO ASYNC AWAIT */
document.addEventListener("DOMContentLoaded", async (event) => {
  const peliculas = await fetchPeliculas();
  console.log(peliculas);
    renderPeliculas(peliculas);
});

/*****************************************************************/
