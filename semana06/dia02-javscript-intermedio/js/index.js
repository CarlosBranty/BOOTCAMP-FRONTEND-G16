

/* Tipos de datos primitivo */
const numero = 388;
const cadena = 'victor';
const esMayor = 39;


/* ARRAYS : en un arreglo tiene elementos a cualquier tipo de dato
 ya sea cadena numero boolean undefined null arrays objects etc */
const listaDeValores = [1,2,3,'Carlos','Conza', true];
console.log(listaDeValores[3])

//Escritura en un arreglo
listaDeValores[2] = 99;
console.log(listaDeValores);

/* Insertar nuevos elementos */
listaDeValores.push('JavaScript');
console.log(listaDeValores);

/* Remover Elementos de un arreglo */
listaDeValores.pop(); // Es para retirar el ultimo elemento de un arreglo
console.log(listaDeValores);

/* Remover un elemento en especifico */
listaDeValores.splice(4, 1)
console.log('splice',listaDeValores);

/* Lobtener el tamaño de un texto o un array */
console.log('Bienvenido'.length);
console.log(listaDeValores.length);

/* OBJETOS Son elementos que siempre tienen una [KEY:VALUE] */
const miObjeto = {
    nombre:'Carlos',
    apellido: 'Conza',
    colorFavorito: 'azúl',
    miEdad: 28,
    'mi edad': 28
};
console.log(miObjeto);

/* LEER Campos de un objeto*/
console.log(miObjeto.nombre);
console.log(miObjeto.apellido);
console.log(miObjeto['mi edad']);
