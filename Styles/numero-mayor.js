
// Crear un programa que dado un array 2d de números, indique cuál es el mayor de ellos. El array debe estar guardado en una variable (no hace falta ingresarlo). Array de ejemplo:



let numeros =
[
    [2, 7, 12, 1],
    [8, 23, 1126],
    [9, 45, 7],
    [22, 3, 24, 4]
  ]
//defino elementos de comparación con el valor mínimo, será reemplazado por elementos del array.
let numeroMayor =0;

for (let i=0; i < numeros.length; i++){  
    const fila = numeros[i];
    for(let j= 0; j< numeros[i].length; j++){
    const numero = fila[j]
        if(numero>numeroMayor){
            numeroMayor=numero;
           
        }
    }

}
alert(`Este es el número mayor: ${numeroMayor}`)