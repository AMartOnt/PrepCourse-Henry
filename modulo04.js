const { validate } = require("json-schema");

// AND
function mayorYMenorYPar (num) {
    if (num > 5 && num < 10 && num % 2 === 0) console.log (true);
    else console.log(false);
};

mayorYMenorYPar (7)
mayorYMenorYPar (8)
//

// OR
function operadorOr (str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
}

operadorOr ('Henry');
operadorOr ('Javascript');
operadorOr ('H');

//

//NOT
function negacion (permiso) {
    if (!permiso) console.log('Tiene permiso');
}

negacion (true)
negacion (false)

function negacion (permiso) {
    if (permiso !== true) console.log('Tiene permiso');
};

negacion (true)

//

function condicionCompleja (num){
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
};

condicionCompleja (10);
condicionCompleja (6);
condicionCompleja (3);
condicionCompleja (5);


//Booleanos

console.log (Boolean(1));
console.log (Boolean(0));
console.log (Boolean(-1));
console.log (Boolean(true));
console.log (Boolean(false));
console.log (Boolean('string'));
console.log (Boolean(null));
console.log (Boolean(" "));
console.log (Boolean(undefined));

 //Bucles

var suma = 0;
// suma = suma +1;
// suma = suma +2;
// suma = suma +3;
// suma = suma +4;

// console.log(suma)

for(var i=0 ; i<5 ; i++){
    suma = suma +i;
    console.log('Variable de iteracion ', i);
};
console.log('Variable Suma: ', suma)

//

var suma = 0;

while (suma < 6) {
    suma = suma +1;
    console.log(suma);
}




function obtenerMayor(x, y) {
    if (x > y && x % 1 == 0 ) {
        console.log (x); 
    } else if (y > x && y % 1 == 0){
        console.log (y);
    } else if (x === y){
        console.log (x || y);
    }
}

obtenerMayor (25, 25)

//

function mayoriaDeEdad(edad) {
    if (edad >= 18){
       console.log ('Allowed');
    } else {
       console.log ('Not allowed');
    }
 }

 mayoriaDeEdad (-8)

 //

function conection(status) {
    if (status == 1) {
       return ('Online'); 
   } else if (status == 2){
       return ('Away');
   } else {
    return ('Offline');
   }
}

conection (5)


    // Retornar un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!".
    // Si "idioma" es "mandarin", devuelve "Ni Hao!".
    // Si "idioma" es "ingles", devuelve "Hello!".
    // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
    // Tu código:

function saludo(idioma) {
    switch(idioma) {
        case 'aleman':
            console.log ('Guten Tag' + '!');
            break;
        case 'mandarin':
            console.log ('Ni Hao' + '!');
            break;
        case 'ingles':
            console.log('Hello' + '!');
            break;
        default:
            console.log('Hola' + '!');
        } 
 }

 saludo('aleman');

//


    // La función recibe un color. Retornar el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".

function colors(color) {
    switch(color) {
        case 'blue':
            console.log ('This is ' +  color);
            break;
        case 'red':
            console.log ('This is ' + color);
            break;
        case 'green':
            console.log('This is ' + color);
            break;
        case 'orange':
            console.log('This is ' + color);
            break;    
        default:
            console.log('Color not found');
    } 
}

colors ('verde')


function esDiezOCinco(num) {
    if (num == 10 || num == 5) {
       console.log (true);
    } else  {
      console.log (false)
    }
}

esDiezOCinco (3)


function estaEnRango(num) {
    if (num < 50 && num > 20)  {
       console.log (true);
    } else  {
      console.log (false)
    }
}

estaEnRango (55);


//

    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:

function esEntero(num) {
        if (num % 1 == 0 && num >=0 || num <= 0) {
            console.log (true);
        } else {
            console.log (false)
        } 
 }

esEntero(-23)


    // Si "num" es divisible entre 3, retorna "fizz".
    // Si "num" es divisible entre 5, retorna "buzz".
    // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
    // De lo contrario, retorna false.
    // Tu código:

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log ('fizzBuzz');
    } else if (num % 3 === 0) {
        console.log ('fizz');
    } else if (num % 5 === 0) {
        console.log ('buzz');
    } else {
        console.log (false);
    }
}

fizzBuzz (4)





    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:
    function operadoresLogicos(num1, num2, num3) {
        if (num1 > 0 && num1 > num2 && num1 > num3) {
            console.log ('Numero 1 es mayor y positivo');
        } else if (num1 < 0 || num2 < 0 || num3 < 0) {
            console.log ('Hay negativos');
        } else if (num3 > num1 && num3 > num2) {
            console.log (num3 + 1);
        } else if (num1 == 0 && num2 == 0 && num3 == 0) {
            console.log ('Error');
        } else {
            console.log (false);
        }
 } 

 operadoresLogicos(10, 30, 6)

 //

    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:

function esPrimo(num) {
    if (num <=1) { 
       console.log (false);
        } 
    for (let i=2 ; i<num ; i++) {
        if(num % i === 0) {
            console.log (false);
        }
    } console.log (true)
}

esPrimo (8)

//

    // Si "valor" es verdadero retornar "Soy verdadero".
    // Caso contrario, retornar "Soy falso".
    // Tu código:

function esVerdadero(valor) {
    if (valor == true) {
        console.log ("Soy verdadero");
    } else {
        console.log ("Soy falso");
    }
}

esVerdadero ('Allison')

//


    // Si el número recibido tiene tres dígitos retornar true.
    // Caso contrario, retornar false.
    // Tu código:
    function tieneTresDigitos(num) {
        if (num > 99 && num <=999) {
            console.log (true);
        } else {
            console.log (false);
        }
 }

 tieneTresDigitos (1000)

 //


    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    function doWhile(num) {
        let result = num;
        let i = 0;
        do {
            i = i + 1;
            result = result + 5;
        } while (i < 8);
        console.log (result);
 }

 doWhile (5)
