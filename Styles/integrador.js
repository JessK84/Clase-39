// Crear un programa para gestionar usuarios
// El programa debe venir ya con una lista de usuarios precargados, con los siguientes datos

// ID	NOMBRE	TELEFONO	EMAIL
// 0	Carla	1545628984	carla@gmail.com
// 1	Pedro	1545251245	pedro@gmail.com
// 2	Lucas	1523357849	lucas@gmail.com
// 3	Ana	15789456	ana@gmail.com
// Debe tener un menú que permita realizar las siguientes operaciones (con su respectivo flujo)

// Operaciones
// Crear un usuario

// Debe pedir los datos del usuario a ingresar, uno por uno
// Los datos a guardar son
// Nombre
// Teléfono
// Email
// Una vez ingresados debe mostrar los datos ingresados y preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe agregar un nuevo usuario a la lista de usuarios con los datos ingresados y mostrar un mensaje de éxito. Al usuario agregado se le tiene que asignar un id automáticamente, este id debe ser único para cada usuario
// Si la respuesta es negativa mostrar un mensaje indicando que la operación fue cancelada
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones

// Buscar un usuario
// Debe pedir seleccionar por qué dato se va a buscar: id, nombre, celular o email
// A continuación debe pedir ingresar el valor que se va a buscar
// Si el usuario existe debe mostrar la información del usuario con todos sus datos
// Si el usuario no existe debe mostrar un mensaje informándolo
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones

// Listar todos los usuarios
// Debe mostrar un listado con todos los usuarios y todos sus datos:
// Id
// Nombre
// Teléfono
// Email
// Luego debe llevar al menú de operaciones

// Modificar un usuario
// Debe pedir ingresar el id del usuario a modificar
// Si el usuario existe debe pedir ingresar uno por uno los datos a modificar del usuario:
// Nombre
// Teléfono
// Email
// Luego debe mostrar los datos ingresados y preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe modificar los datos del usuario con los nuevos ingresados y mostrar un mensaje de éxito
// Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
// Si el usuario no existe debe mostrar un mensaje informándolo
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones






const usuarios = 
[
[0,	"Carla", "1545628984",	"carla@gmail.com"],
[1,	"Pedro", "1545251245",	"pedro@gmail.com"],
[2,	"Lucas", "1523357849",	"lucas@gmail.com"],
[3,	"Ana",	"15789456",	"ana@gmail.com"],
]

let salirDelPrograma = true;
const acciones = `¿Qué desea hacer?
1- Crear un usuario
2- Buscar un usuario
3- Modificar un usuario
4- Eliminar un usuario
5- Salir`
let id = 4;


const queDeseaHacer =`¿Qué dato conoce para buscar el usuario?: \n-ID \n-Nombre \n-Teléfono\n-Email`;
const mensajeContinuar = `¿Desea continuar?`;
const mensajeCancelado ="La operación ha sido cancelada";
const mensajeEliminado= "El usuario ha sido eliminado";
const idNoExiste= `El ID no existe, intente una opción válida`;



while(salirDelPrograma){
    const operaciones= prompt(acciones)
    switch(operaciones){
    case "1":
    case "crear usuario":
        let ingreseUsuario =true;
        while(ingreseUsuario){
            nombre = prompt(`Ingrese nombre`)
            telefono = prompt(`Ingrese teléfono`) 
            eMail = prompt(`Ingrese Email`)
            id++
            // usuarios.push(id),(nombre),(telefono),(eMail)
            let nuevoUsuario = confirm(`Acabas de añadir:` +`\n` + `------------` +`\n` +`-ID: ${id}\n- ${nombre} \n- ${telefono} \n- ${eMail}\n- ¿Confirmas el usuario?`)      
            if(nuevoUsuario){
                alert(`Has ingresado correctamente el usuario`) 
            } else if (!nuevoUsuario){
                alert(`La operación fue cancelada`)
                }
                ingreseUsuario=confirm(`¿Desea repetir la operación?`)
            }
        break;   

    case "2":
    case "buscar usuario": 
    let buscarUsuario=true;   
    while (buscarUsuario)   {
        let ingreseValor = prompt(queDeseaHacer);
        let mensajeUsuario="";  
        let mensajeError="El valor no existe";
        switch(ingreseValor){
        case "id":
            let buscarId= Number(prompt(`Ingrese el ID`));
            for(let i =0; i <usuarios.length; i++){                   
             if(buscarId === usuarios[i][0]){
                mensajeUsuario=`El ID ${buscarId} pertenece al siguiente usuario: \n -${(usuarios[i]).join("\n-")}`;                 
            } else {
                ingreseValor=mensajeError
            }
        }
        if (mensajeUsuario){
            alert(mensajeUsuario)
        }else {
            alert(mensajeError)
        }
        buscarUsuario=confirm(mensajeContinuar)
            break;    
        case "nombre":
            let buscarNombre=prompt(`Ingrese el nombre del usuario`)
            for(let i =0; i <usuarios.length; i++){ 
                if (buscarNombre === usuarios[i][1])   {
                mensajeUsuario=`${buscarNombre} es un USUARIO: \n -${(usuarios[i]).join("\n-")}`;
            } else {
                ingreseValor=mensajeError
            }
        }    
        if (mensajeUsuario){
            alert(mensajeUsuario)
        }else {
            alert(mensajeError)
        }
        buscarUsuario=confirm(mensajeContinuar)
            break;
        case "teléfono":
            let buscarTelefono=prompt(`Ingrese el número de teléfono del usuario`)
            for(let i =0; i <usuarios.length; i++){ 
                if (buscarTelefono === usuarios[i][2])   {
                mensajeUsuario=`El teléfono ${buscarTelefono} pertenece a un USUARIO: \n -${(usuarios[i]).join("\n-")}`;
            } else {
                ingreseValor=mensajeError
            }
        }   
        if (mensajeUsuario){
            alert(mensajeUsuario)
        }else {
            alert(mensajeError)
        } 
        buscarUsuario=confirm(mensajeContinuar)
            break;
        case "email":
            let buscarEmail=prompt(`Ingrese el email del usuario`)
            for(let i =0; i <usuarios.length; i++){ 
                if (buscarEmail === usuarios[i][3])   {
                mensajeUsuario=`El email ${buscarEmail} pertenece a un USUARIO: \n -${(usuarios[i]).join("\n-")}`;
                
            } else {
                ingreseValor=mensajeError;
            }
        }   
        if (mensajeUsuario){
            alert(mensajeUsuario)
        }else {
            alert(mensajeError)
        }
        buscarUsuario=confirm(mensajeContinuar);
           break;       
           default:  
        }
    }
    break;

    case "3":
    case "modificar usuario":    
        let deseaModificarUsuario=true;
        while(deseaModificarUsuario){
            let buscarId= Number(prompt(`Ingrese el ID que desea modificar`))     
            let modificarUsuario ="";              
            for(let i =0; i <usuarios.length; i++){                   
             if(buscarId === usuarios[i][0]){  
               modificarUsuario= prompt(`El ID ${buscarId} es correcto, correspode al usuario \n${(usuarios[i]).join("\n")}vamos a modificarlo. \nIngrese nombre`)
               usuarios.splice(0, 1, )              
               modificarUsuario = prompt(`Ingrese el número de teléfono`)
               modificarUsuario = prompt(`Ingrese el email`)
            } else {
                modificarUsuario= idNoExiste
            }        
        }
    }
            alert(idNoExiste)
        break;
    case "4":
    case "eliminar usuario":
        let deseaElimiarUsuario=true;

        while(deseaElimiarUsuario){
            let eliminarUsuario=true;
            let buscarId= Number(prompt(`Ingrese el ID que desea modificar`))
            if(buscarId>=id){ // De este modo no es dinámico. CORREGIR!!!!
                alert(idNoExiste) 
            } 
            for(let i =0; i <usuarios.length; i++){              
                if(buscarId === usuarios[i][0]){  
                  eliminarUsuario= confirm(`El ID ${buscarId} correspode al usuario \n${(usuarios[i]).join("\n")}\n-¿Desea eliminarlo?`)
                  if(eliminarUsuario){
                        alert(mensajeEliminado)
                  } else if (!eliminarUsuario){
                        alert(mensajeCancelado) 
                  }
            }
        } 
            deseaElimiarUsuario=confirm(`¿Desea eliminar algún usuario más?`)
    } 
     
        break; 
    case "salir":
    case "5":
        let deseaSalir= confirm(`¿Desea salir del programa?`);
        if(deseaSalir){
            alert(`Gracias por disfrutar nuestros servicios`);
            salirDelPrograma=false;
        }         
    break;
    default:
        //si el ingreso de la acción es incorrecta, es una opción para que vuelva a ingresarla
        if(operaciones !== acciones ){
            alert(`Ingreso incorrecto, intente nuevamente`)
        }
      
    }
}


// Eliminar un usuario
// Debe pedir ingresar el id del usuario a eliminar
// Si el usuario existe debe mostrar los datos del usuario y preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe eliminar el usuario de la lista de usuarios y mostrar un mensaje de éxito
// Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones


// Modificar un usuario
// Debe pedir ingresar el id del usuario a modificar
// Si el usuario existe debe pedir ingresar uno por uno los datos a modificar del usuario:
// Nombre
// Teléfono
// Email
// Luego debe mostrar los datos ingresados y preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe modificar los datos del usuario con los nuevos ingresados y mostrar un mensaje de éxito
// Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
// Si el usuario no existe debe mostrar un mensaje informándolo
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones