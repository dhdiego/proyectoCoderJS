 // PARA VER ESTE EJERCICIO DEBE COMENTAR EL RESTO DE LOS SCRIPTS Y HABILITAR EL ejercicio2


// Ejercicio de IF dependiendo de la cantidad de efectivo que tenga el cliente (dinero a pagar) o si prefiere abonar con tarjeta.

const dinero = 300;
const totalPagar = 500;
const tarjeta = false;


if(dinero >= totalPagar) {
    console.log('Pago en efectivo Aceptado');
} else if(tarjeta) {
    console.log('Prefiero Abonar con Tarjeta')
} else {
    console.log('Fondos Insuficientes')
}



