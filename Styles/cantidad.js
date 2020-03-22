// Cantidad

// Crear un programa que dado un array 2d de strings, indique cuál es la cantidad de una de sus ítems. El programa debe dar la posibilidad de ingresar qué item se desea buscar. Ejemplo:
// [
//   ['manzanas', 'peras', 'bananas', 'bananas'],
//   ['bananas', 'manzanas'],
//   ['manzanas', 'peras', 'bananas'],
//   ['peras', 'bananas', 'manzanas', 'bananas']
// ]
// // Cantidad de manzanas: 4


const arrayFrutas =
[
      ['manzanas', 'peras', 'bananas', 'bananas'],
      ['bananas', 'manzanas'],
      ['manzanas', 'peras', 'bananas'],
      ['peras', 'bananas', 'manzanas', 'bananas']
]

let busqueda =prompt(`¿Qué desea encontrar: manzanas, peras, bananas o peras?`)
let resultado=0;
for (let i=0; i < arrayFrutas.length; i++){  
    for(let j= 0; j< arrayFrutas[i].length; j++){
        if(arrayFrutas[i][j] ===busqueda){
            resultado++
        }
    }

}

alert(`Hay ${resultado}: ${busqueda}`)