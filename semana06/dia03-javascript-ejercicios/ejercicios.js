/* Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función 
que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga 
tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.Por ejemplo, si tenemos las ovejas: */

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
    const ovejasfiltradas =[];
    for(const ovejaf of ovejas){
      const nombref = ovejaf.name.toLowerCase();
      if(ovejaf.color === 'rojo' && nombref.includes('n') && nombref.includes('a')){
          ovejasfiltradas.push(ovejaf)
      }
    }
   console.log(ovejasfiltradas);


  
/* SOLUCION DEL EJERCICIO POR EL PROFESOR */
export default function contarOvejas(ovejas){
    return ovejas.filter(function(oveja){
        const nameLower = oveja.name.toLowerCase();

        const isRedColor = oveja.color === 'rojo';
        const hasLetterN = nameLower.name.includes('n')
        const hasLetterA = nameLower.name.includes('a')

        return isRedColor && hasLetterN && hasLetterA
    })
}
const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas)

/*  */