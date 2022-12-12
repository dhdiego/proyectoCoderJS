
/// ENCICLOPEDIA MUNDIALISTICA

// PUEDE INGRESAR LOS DATOS DE UN JUGAROS, DARLO DE BAJA, MODIFICARLO Y CONSULTAR SU FICHA TECNICA INGRESANDO EL NUMERO DE PUESTO DEL JUGADOR.

//MESSI = 10
// De Paul = 7
// DiMaria = 23
//dibu = 1
//Alvarez = 19 


class Jugador {
    constructor(nombre, apellido, puesto, calificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.calificacion = calificacion;
    }
}

const jugadorMessi = new Jugador('Lionel', 'Messi', 10, 10 );
const jugadorDePaul = new Jugador('Rodrigo', 'De Paul', 7, 7 );
const jugadorDiMaria = new Jugador('Angel', 'Di Maria', 23, 7 );
const jugadorDibu = new Jugador('Damian', 'Martinez', 1 , 9 );
const jugadorAlvarez = new Jugador('Julian', 'Alvarez', 19 , 5 );

const arrayJugador = [];

arrayJugador.push(jugadorMessi);
arrayJugador.push(jugadorDePaul);
arrayJugador.push(jugadorDiMaria);
arrayJugador.push(jugadorDibu);
arrayJugador.push(jugadorAlvarez);
console.log(arrayJugador)

function menu() {
    alert('Bienvenido a la Selección');
    let opcion = parseInt(prompt('Ingrese una opcion: \n 1) Alta de Jugador, \n2)Baja de Jugador, \n3) Modificación de Jugador, \n4) Consultar Ficha Tecnica, \n5) Salir'));
    return opcion;
}



// Dar de alta un jugador

function altaJugador(){
    let nombre = prompt('Ingrese el nombre del Jugador: ');
    let apellido = prompt('Ingrese el apellido del Jugador: ');
    let puesto = parseInt(prompt('Ingrese el Puesto del jugador'));
    let calificacion = parseInt(prompt('Ingrese la calificación del jugador'));
    let jugador = new Jugador(nombre, apellido, puesto, calificacion);
    arrayJugador.push(jugador);
    console.log(arrayJugador);
}

// dar de baja un jugador (ingresar el puesto por Ejemplo Messi = 10)

function bajaJugador(){
    let puesto = parseInt(prompt('Ingrese el Puesto del jugador: \n A) MESSI = 10, \n B) De Paul = 7,  \n C) DiMaria = 23, \n D) Dibu Martinez = 1, \nE)Julian Alvarez = 19 '));
    let jugador = arrayJugador.find(jugador => jugador.puesto === puesto);
    let indice = arrayJugador.indexOf(jugador);
    arrayJugador.splice(indice, 1);
    console.log(arrayJugador);
}

// modificar un jugador (ingresar el puesto ejemplo messi = 10)

function modificarJugador(){
    let puesto = parseInt(prompt('Ingrese el Puesto del jugador: \n A) MESSI = 10, \n B) De Paul = 7,  \n C) DiMaria = 23, \n D) Dibu Martinez = 1, \nE)Julian Alvarez = 19 '));
    let jugador = arrayJugador.find(jugador => jugador.puesto === puesto);
    let indice = arrayJugador.indexOf(jugador);
    let nombre = prompt('Ingrese el nombre del Jugador');
    let apellido = prompt('Ingrese el apellido del jugador');
    let calificacion = parseInt(prompt('Ingrese la Calificacion del jugador'));
    let jugadorModificado = new Jugador (nombre, apellido, puesto, calificacion);
    arrayJugador.splice(indice, 1, jugadorModificado);
    console.log(arrayJugador);

}

// consultar un jugador (debe ingresar el numero de camiseta ejemplo Messi =10)

function consultaJugador(){
    let puesto = parseInt(prompt('Ingrese el Puesto del jugador: \n A) MESSI = 10, \n B) De Paul = 7,  \n C) DiMaria = 23, \n D) Dibu Martinez = 1, \nE)Julian Alvarez = 19 '));
    let jugador = arrayJugador.find(jugador => jugador.puesto === puesto);
    console.log(jugador);
}

// salir 

function salir() {
    alert('Gracias por ver nuestro Visualizador Mundialistico');
}

let opcion = menu();
switch (opcion) {
    case 1:
        altaJugador();
        break;
    case 2:
        bajaJugador();
        break;
    case 3: 
        modificarJugador();
        break;
    case 4: 
        consultaJugador();
        break;
    case 5: 
        salir();
        break;
    default:
        alert('No ha ingresado una opcion valida');
        break;
        
}