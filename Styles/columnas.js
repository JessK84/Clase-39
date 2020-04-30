// Crear un programa que dado un array 2d de números, indique cuál es la suma de una de sus columnas. El programa debe dar la posibilidad de ingresar qué columna se desea elegir. El array debe estar guardado en una variable (no hace falta ingresarlo). Ejemplo:


const numeros =
[
    [2, 7, 12, 1],
    [8, 23, 5, 3],
    [9, 45, 7, 13],
    [22, 3, 24, 4]
]

// [
// [0, 0, 0, 0],
// [0, 1, 0, 0],  
// [0, 1, 1, 0],
// [1, 1, 1, 1]
// ]

let columna =Number(prompt(`¿Qué columna desea sumar?`));
let resultado=0;


for (let i=0; i < numeros.length; i++){  //solo un array porque se tiene que llegar a las columas, no al interior. Para acceder a las filas, va el segundo for. 
        if(columna===0){
            resultado+=numeros[i][0];           
        } else if (columna===1){           
            resultado+=numeros[i][1]
        }  else if (columna===2){
            resultado+=numeros[i][2]
        }  else if (columna===3) {
            resultado+=numeros[i][3];
        } else {
            mensaje=`La columna no existe`;
        }
    }
//Para que pueda mostrar el mensaje según el resultado, dado que los alert dentro del for hacen que repliquen varias veces.
if (resultado) {
    alert(`La columna ${columna} suma en total ${resultado}`)
} else if(!resultado) { 
    alert(mensaje)
}
