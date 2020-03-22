
let numeros =
[
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4]
  ]

const filas = Number(prompt("Ingrese fila"))
const columnas = Number(prompt("Ingrese columna"));
const numero = numeros[filas] && numeros[filas][columnas];// evaluación de circuito corto. 

if(numero !== undefined){
    alert(`El número es ${numero}`)
} else {
    alert(`Ingrese índices correctos`)
}




