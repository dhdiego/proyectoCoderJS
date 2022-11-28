 // PARA VER ESTE EJERCICIO DEBE COMENTAR EL RESTO DE LOS SCRIPTS Y HABILITAR EL ejercicio1
 
 // Ejercicio estructura de control 
// El usuario ingresa un metodo de pago
// Se le indica al usuario que metodo de pago ha elegido


const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con : ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con: ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con: ${metodoPago}`);
        break;

    default:
            console.log('Aún No has seleccionado un metodo de pago o bien el metodo de pago no es soportado');
        break;

}