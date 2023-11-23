export const fetchPeliculas = async () => {
    const url = 'http://localhost:3000/peliculas';
   
    const response =  await fetch(url) // Aqui por defecto utiliza el metodo GET
   
       const data = await response.json();
       
       return data;
   };