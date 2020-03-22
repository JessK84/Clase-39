// Sublistas

// Crear un programa que permita agregar listas de tareas y agruparlas en categorias. El programa debe hacer lo siguiente:
// Permitir ingresar el nombre de una categoría
// Permitir ingresar una tarea
// Preguntar si desea ingresar otra tarea
// Si responde que si, volver al punto 2
// Si responde que no, preguntar si desea ingresar otra categoría
// Si responde que sí, volver al punto 1
// Si responde que no, terminar el programa En todo momento (en cada mensaje), el programa debe mostrar las tareas agrupadas por categorías. Las categorías deben diferenciarse de las tareas (se pueden usar divisores, emojis, espacios, etc). Ejemplo:
// Lista de Tareas

// SUPERMERCADO
// ----------------------
// 👉 Comprar harina
// 👉 Comprar gaseosa
// 👉 Comprar aceite

// FACULTAD
// ----------------------
// 👉 Sacar apuntes
// 👉 Anotarse para final

// MICHI
// ----------------------
// 👉 Comprar comida
// 👉 Llevar a veterinaria 


let listasTareas =[];
let categoria =(`Este es su block de notas. Vamos a comenzar!
Agregue una categoría`);
const tarea =(`¿Qué tarea desea agregar?`);
let terminarPrograma=true;
let mensajeCategoria ="";
let mensajeFinal ="";

while (terminarPrograma) {   
    let nuevaCategoria=prompt(categoria)
    if (nuevaCategoria){
        mensajeCategoria=nuevaCategoria + `\n`+`________________`;  
}
let agregoTarea=true; // acá para q el bucle tenga final
let mensajeTarea =""; // para que no me sume tareas a todas las categorías
    while(agregoTarea){
        nuevaTarea =prompt(tarea)
        agregoTarea= confirm(`¿Desea agregar una nueva tarea?`)
        mensajeTarea+=nuevaTarea + `\n`;  
    }   
    mensajeFinal+=`________________`+ `\n`+ nuevaCategoria +`\n`  + `________________`+`\n` + mensajeTarea;
    alert(mensajeFinal)
    terminarPrograma=confirm(`¿Desea agregar nueva categoría?`) 
}

alert(`Gracias! nos vemos luego`)