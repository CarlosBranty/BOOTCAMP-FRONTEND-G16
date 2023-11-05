

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
    'mi edad': 28,
    coloresFavoritos: ['negro', 'rosa', 'rgb'],
    cursos:[
        {
            nombre:'Matemática',
            nota: 18
        },
        {
            nombre:'Algoritmos',
            nota: 20
        }
    ]
};
console.log(miObjeto);

/* LEER Campos de un objeto*/
console.log(miObjeto.nombre);
console.log(miObjeto.apellido);
console.log(miObjeto['mi edad']);
console.log(miObjeto.coloresFavoritos);
console.log(miObjeto.coloresFavoritos[2]);
console.log(miObjeto.cursos); // para acceder al un objeto
console.log(miObjeto.cursos[1]);
console.log(miObjeto.cursos[1].nota);
console.log(miObjeto.cursos[1]['nombre']);

/* eliminar propiedades de un objeto */
delete miObjeto.colorFavorito;
console.log(miObjeto);

/* Insertar un nueva propiedad a un objeto */
miObjeto.PlatoFavorito = 'Pastel de papa';
miObjeto['Juegos favoritos'] = ['Valorant', 'BDO']
console.log(miObjeto);

/* DESTRUCTURING */
const nombreValue = miObjeto.nombre;
console.log(nombreValue);

const {nombre, apellido} = miObjeto;
console.log(nombre,apellido);

const {nombre: nombreValor, apellido:apellidoValor} = miObjeto;

console.log(nombreValor, apellidoValor);

/* destructurin para arreglos */
const amigos = ['angel', 'carlos', 'claudia', 'franklin', 'samael']

const [amigo1, amigo2] = amigos;

console.log(amigo1);
console.log(amigo2); 

/* SPREAD OPERATOR : para poder juntar las propiedades de un objeto
se antepone ... al nombre de la propiedad para poder utilizarlas*/
const producto = {
    nombre:'Laptop', // ojo con el nombre de la propiedad ya que se repite con cliente
    precio:'6800',
    categoria: 'tech'
};
const cliente = {
    nombre: 'claudia',
    isVip: true
};

const nuevoObjeto = {...producto, ...cliente};
console.log(nuevoObjeto)

/* SPREAD OPERATOS SIN COLICIONES */
const nuevoObjetoSinColiciones = {
    producto: {...producto},
    cliente: {...cliente}

};
console.log(nuevoObjetoSinColiciones)

/* OTROS METODOS */
console.log(Object.keys(producto));//obetenemos solo las keys o claves
console.log(Object.values(producto)); // obtenemos solo los valores del objeto
console.log(Object.entries(producto)); // Convierte un objeto en arreglo


/* METODOS DE ARREGLOS */
/* METODO INCLUDES, nos indica si el valor que se pasa como parametro se encuentra en el arreglo 
y devuelve un booleano */
const numeross =[1,2,3,4,5]
console.log(numeross.includes(3));
console.log(numeross.includes(51));

/* METODO filter, nos ayuda a ubicar un elemento dentro de un arreglo */
const lenguages = ['JavaScript', 'C#', 'php','c', 'c++', 'java'];

console.log(
    lenguages.filter(
        function(lenguage){
            // return lenguage === 'c' // El resultado sera ['c']
            return lenguage.includes('c') // El resultado sera [javaScript, 'c', 'c++']
        }
    )
)