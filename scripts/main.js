//Mediante una prompt se le pide al usuario que ingrese una hora-
// de 6 a 12hs lo saludamos con un buen dia
// de 13 a 18 hs con un buenas tardes
// y de 19 a 24 le indicamos que es el horario de cenar
// si ingresa otra combinacion de numeros o letras le indicamos que ese no es un horario valido.



let hora = prompt('⏲️ Ingresa la hora Por Favor:');
    

if( hora >= 6 && hora <=12) {
    document.write(' <h1>😎 Buenos días!</h1>');
}else if( hora >= 13 && hora <=18){
    document.write('<h1> 🌜 Buenas Tardes!</h1>');
}else if( hora >= 19 && hora <= 24){
    document.write('<h1> 🍗 Hora de Cenar!</h1>');
} else {
    document.write('<h1>Ese no es un horario valido</h1>')
}


// ----------- Otros ejercicios para la consola----
// para ver el otro js y sus ejercicios habria que indicar la ruta    <script src="scripts/ejercicio.js"></script>