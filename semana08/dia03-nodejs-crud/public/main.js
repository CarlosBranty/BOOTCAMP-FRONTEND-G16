import { fetchPeliculas } from "./services.js";
import { renderPeliculas } from "./peliculas.js";
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

  /* EJEMPLO USANDO ASYNC AWAIT */
    document.addEventListener('DOMContentLoaded', async (event) => {

        const peliculas = await fetchPeliculas();
        console.log(peliculas);
        renderPeliculas(peliculas);
    });

/*****************************************************************/

