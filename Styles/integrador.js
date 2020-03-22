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

// Eliminar un usuario
// Debe pedir ingresar el id del usuario a eliminar
// Si el usuario existe debe mostrar los datos del usuario y preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe eliminar el usuario de la lista de usuarios y mostrar un mensaje de éxito
// Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones

// Salir del programa
// Debe preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe mostrar un mensaje de despedida y salir del programa
// Si la respuesta es negativa debe volver al menú de operaciones

// Todos los mensajes que se requieran son libres (pueden poner lo que mejor les parezca)

// No es requerido validar los datos que se ingresan, por ejemplo, si en vez de ingresar un número de celular se ingresa un dato no válido, como una palabra


// Sí es requerido que si se ingresa una opción incorrecta (cuando tengamos que hacerlo) el programa nos avise del hecho, y tome una acción por default (por ejemplo, volver al menú)

const usuarios = 
[
[0,	"Carla", "1545628984",	"carla@gmail.com"],
[1,	"Pedro", "1545251245",	"pedro@gmail.com"],
[2,	"Lucas", "1523357849",	"lucas@gmail.com"],
[3,	"Ana",	"15789456",	"ana@gmail.com"]
]

const salirDelPrograma = true;
const acciones = `¡Qué desea hacer 
1- Crear un usuario
2- Buscar un usuario
3- Modificar un usuario
4- Eliminar un usuario
5- Salir`
let id = 4;

while(salirDelPrograma){
    const operaciones= prompt(acciones)
    switch(operaciones){
    case "1":
    case "crear usuario":
        nombre = prompt(`Ingrese su nombre`);
        telefono = prompt(`Ingrese su teléfono`);
        eMail = prompt(`Ingrese su Email`);
        let nuevoUsuario =nombre + telefono + eMail;
        id++
        nuevoUsuario = confirm(`Acabas de añadir a:\n-ID: ${id}\n-${nombre} \n-${telefono} \n-${eMail}\n-¿Confirmas el usuario?`)
        if(nuevoUsuario){
            usuarios.push(nuevoUsuario);
            alert(`Has ingresado correctamente el usuario`)
        } else if (!nuevoUsuario){
            let reingresarUsuario= confirm(`La operación fue cancelada\n ¿Desea repetir el procedimiento?`)
            if (reingresarUsuario){
                switch(operaciones){
                case "1":
                case "crear usuario":
                }
            }
        } 
    break;    
    case "buscar":
    case "buscar usuario":
      let buscarUsuario= prompt(`¿Qué dato conoce del usuario a buscar: \n-ID \n-Nombre \n-Teléfono\n-Email`)
    }
}

// Buscar un usuario
// Debe pedir seleccionar por qué dato se va a buscar: id, nombre, celular o email
// A continuación debe pedir ingresar el valor que se va a buscar
// Si el usuario existe debe mostrar la información del usuario con todos sus datos
// Si el usuario no existe debe mostrar un mensaje informándolo
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones