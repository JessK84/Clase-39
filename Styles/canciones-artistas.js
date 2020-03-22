// Canciones y Artistas

// Crear un programa con las siguientes posibles acciones. Una vez realizada la acción, debe volver al menú de opciones para elegir una nueva.
// AGREGAR CANCION: debe permitir ingresar el nombre de una canción y le artista, separado por coma, por ejemplo: Africa, Toto
// BUSCAR CANCIONES: debe permitir ingresar el nombre de une artiste y mostrar una lista con todas sus canciones que (hay ingresadas)
// LISTAR ARTISTAS: debe mostrar una lista con todes les artistes (solo los nombres)
// SALIR: debe terminar la ejecución del programa

let buscarCanciones = [
    ["Calamaro", "Flaca"],
    ["Divididos", "El 38"],
    ["NTVG", "A las 9"],
]  

const quiereContinuar =true;
let ingresarCancion = [];
const queQuiereHacer ="";
let mensaje="" ;
let listaCanciones =[];
let noHayCancion="";
const accion =(`¿Qué desea realizar?
1. Agregar canción
2. Buscar canciones
3. Ver artistas
4. Salir`
)

while (quiereContinuar){
    let queQuiereHacer = prompt(accion);
    switch(queQuiereHacer){
        case "1": 
        case "agregar":
        case "agregar canción":
        ingresarCancion =prompt(`Ingrese un artista, luego la canción separado por una coma`).split(`,`);
        buscarCanciones.push(ingresarCancion);   //ingrese al array de buscar canciones       
        alert(`Acabas de ingresar a la lista: ` +`\n`+`________________` + ` \n`+ `${ingresarCancion}`);
  
    break;
        case "2" :
        case "buscar canción":
        ingreseArtista =prompt(`Ingrese el nombre del artista`);
        let canciones="";    
        for(let i=0; i<buscarCanciones.length; i++){//para que recorra en array en bsuca de las canciones
           if(ingreseArtista===buscarCanciones[i][0]){
                canciones+=buscarCanciones[i][1] + `\n`;                    
            } else{
                noHayCancion = (`No existe el artista`);                      
            }            
        }  
        if(canciones){
            alert(canciones)  
        } else {
            alert(noHayCancion)
        }

    break;
    case "3":
    case "ver artista":
        let artistas= "" ; 
        mensaje=artistas +`________________`+ ` \n`;      
        for(let i=0; i<buscarCanciones.length; i++){    
                mensaje+= buscarCanciones[i][0] + ` \n`;                              
            }     
                  
            alert(mensaje)  

    break;   
    case "4" :
    case "salir":
        alert(`Gracias por disfrutar nuestros servicios`)
        quiereContinuar=false;
    break;
    default:
        //si el ingreso de la acción es incorrecta, es una opción para que vuelva a ingresarla
        if(queQuiereHacer !== accion ){
            alert(`Ingreso incorrecto, intente nuevamente`)
        }
    }
}
