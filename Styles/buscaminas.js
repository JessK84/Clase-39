// Buscaminas
// Crear un programa que dado un array 2d permita ingresar una coordenada (representando los índices del array), y mostrar si era una casilla vacía o tenía una mina. En caso de que tenga una casilla vacía, debe poder seguir jugando e ingresando casillas. Si descubre todas las casillas vacías o elige una con una mina, el juego debe terminar, e indicar si perdió o ganó. Las minas y casillas vacías (ocultas y descubiertas) pueden representarse con emojis con con números o letras.
// const tablero = 


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

const tablero =
[
    ["X", "O", "O", "O"],
    ["O", "O", "O", "X"],
    ["O", "X", "O", "X"],
    ["X", "X", "O", "X"]
  ]
  
// const tablero =
// [
//   ['📦', '💣', '💣'],
//   ['📦', '📦', '📦'],
//   ['💣', '📦', '📦']
// ] 
  
  let cajasRestantes = 0;
  let escogeBomba = false;
  
  // Obtengo la cantidad de cajas al inicio de la partida
  
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      if (tablero[i][j] === '📦') {
        cajasRestantes++;
      }
    }
  }
  
  // Bucle del juego
  
  while(cajasRestantes > 0 && !escogeBomba) {
    // Obtengo el tablero, recorriéndolo y concatenándolo en un string
  
    let tableroActual = '';
    
    for (let i = 0; i < tablero.length; i++) {
      for (let j = 0; j < tablero[i].length; j++) {
        // Si es una bomba muestro una caja, sino lo que haya en esa casilla
        tableroActual += tablero[i][j] === '💣' ? '📦' : tablero[i][j];
      }
      // Por cada fila inserto una nueva línea
      tableroActual += '\n';
    }  
    
    const jugada = prompt(`Ingrese las coordenadas x e y separadas por espacio, por ejemplo: 0 1 \n${tableroActual}`);
    
    const coordenadas = jugada.split(' ');
    const x = coordenadas[0];
    const y = coordenadas[1];
    
    const jugadaValida = tablero[y] !== undefined && tablero[y][x] !== undefined && tablero[y][x] !== '💨';
    
    if (jugadaValida && tablero[y][x] === '📦') {
      alert('¡Casilla vacía!¡Te has salvado!');
      tablero[y][x] = '💨';
      cajasRestantes--;
    } 
  
    if (jugadaValida && tablero[y][x] === '💣') {
      tablero[y][x] = '💥';
      escogeBomba = true;
    } 
    
    if (!jugadaValida) {
      alert('Esa no es una jugada válida');
    }
  }
  
  // Muestro el tablero finalizado con todo descubierto
  let tableroFinal = '';
  
  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      tableroFinal += tablero[i][j];
    }
    tableroFinal += '\n';
  }
  
  let resultadoFinal = '';
  
  if (cajasRestantes === 0) {
    resultadoFinal = '¡Felicitaciones! Has ganado.\n'
  }
  
  if (escogeBomba) {
    resultadoFinal = '¡Oh no!¡Era una bomba!¡Has perdido!\n';
  }
  
  alert(resultadoFinal + tableroFinal);
   


