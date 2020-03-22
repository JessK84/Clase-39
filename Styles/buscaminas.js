// Buscaminas
// Crear un programa que dado un array 2d permita ingresar una coordenada (representando los índices del array), y mostrar si era una casilla vacía o tenía una mina. En caso de que tenga una casilla vacía, debe poder seguir jugando e ingresando casillas. Si descubre todas las casillas vacías o elige una con una mina, el juego debe terminar, e indicar si perdió o ganó. Las minas y casillas vacías (ocultas y descubiertas) pueden representarse con emojis con con números o letras.
// const tablero = 
// [
//   ['📦', '💣', '💣'],
//   ['📦', '📦', '📦'],
//   ['💣', '📦', '📦']
// ] 

// 📦 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// // Ingrese una coordenada: 0,0
// // La caja está vacía!

// 💨 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// // Ingrese una coordenada: 0,1
// // ¡Oh no!¡Has encontrado una bomba!

// 💨 💥 📦
// 📦 📦 📦
// 📦 📦 📦


// const filas = Number(prompt("Ingrese fila"))
// const columnas = Number(prompt("Ingrese columna"));
// const numero = numeros[filas] && numeros[filas][columnas];// evaluación de circuito corto. 

// let finalDelJuego = true;
let tablero =
[
    ["X", "O", "O", "O"],
    ["O", "O", "O", "X"],
    ["O", "X", "O", "X"],
    ["X", "X", "O", "X"]
  ]
  let jugador = Number(prompt("Ingrese coordenadas"))
  jugador = jugador;
let mensaje="";

    for(let i=0; i< tablero.length; i++){
        for(let j=0; tablero[i].length; j++){
             if(tablero[i][j] === jugador ){
                if(jugador==="O"){
                    mensaje=`Ganaste`;
                }
    } if(tablero[i][j] === "O") {
        mensajePerdiste=`¡Oh no!¡Has encontrado una bomba!`
    }
   

    }
}
 

if ("X"){
    alert(mensajePerdiste)
}

   





// const filas = Number(prompt("Ingrese fila"))
// const columnas = Number(prompt("Ingrese columna"));
// const numero = numeros[filas] && numeros[filas][columnas];// evaluación de circuito corto. 

// if(numero !== undefined){
//     alert(`El número es ${numero}`)
// } else {
//     alert(`Ingrese índices correctos`)
// }