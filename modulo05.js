// ARRAYS

const { log, info } = require("console");
const { machine, userInfo } = require("os");

var listaDeCompras = [];
listaDeCompras[3] = "Tomates";
listaDeCompras[1] = "Lechuga";

console.log(listaDeCompras[1]);
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Metodo LENGTH

console.log(listaDeCompras.length);
var nombres = ["Matias", "Maria", "Diego", "Rosa", "Allison"].length;
console.log(nombres);

// Metodos: PUSH - UNSHIFT - POP - SHIFT

var colores = ["amarillo", "azul"];
colores.push("rojo");
colores.unshift("verde");
colores.pop();
colores.shift();
console.log(colores);

// INCLUDES

var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes("Monet");
console.log(incluyeDali);

// EVERY (que todos los datos cumplan con una condición, este caso: ser mayor que 5)

var numeros = [10, 6, 8, 9];
var cumplenCondicion = numeros.every((num) => {
  return num > 5;
});
console.log(cumplenCondicion);

// SPLIT

var palabra = 'Henri';
var palabraSeparada = palabra.split('');
console.log(palabraSeparada);

var palabra = 'Henri';
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
// console.log(palabraSeparada);

var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

//FOR EACH

var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => console.log(num));
numeros.forEach((num) => {
  if (num === 3) {
    console.log(num);
  }
});

//MAP

var numeros = [1, 2, 3, 4];
var masUno = numeros.map((num) => {
  return num + 1;
});
console.log(masUno);

//BUCLES FOR

var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


//


function encontrarLetraP(string) {
  var letras = string.split('');

  for (var i = 0; i < letras.length; i++) {
    if (letras[i] === 'p') {
      console.log('Si contiene a P');
    }
  }
}

encontrarLetraP('JavaScript')
encontrarLetraP('Henry')

//BUCLES WHILE

var arr = []

while (arr.length < 5) {
  arr.push('BOOM');
}

console.log(arr);

//BUCLE INFINITO

// var arr = [];
// var n = 1;

// while (n < 3) {
//   arr.push(Math.random());
// }


function devolverPrimerElemento(array)
// Retornar el primer elemento del arreglo recibido por parámetro.
// Tu código:

function devolverPrimerElemento(array) {
  return (array[0]);
}

var arr = [1, 2, 3, 4];

devolverPrimerElemento(arr)

//

function devolverUltimoElemento(array) {
  console.log(array[array.length - 1]);
}

var arr = [1, 2, 3, 4];

devolverUltimoElemento(arr)

//


// El arreglo recibido por parámetro contiene números.
// Retornar un arreglo con los elementos incrementados en +1.
// Tu código:
function incrementarPorUno(array) {
  var sumaUno = array.map
}

var numeros = [1, 2, 3, 4];
var masUno = numeros.map((num) => { return num + 1; });
console.log(masUno);


/// *** OBJETOS *** 


// var deportes = {
//   conBalon: ['Futbol', 'Basquetball', 'Golf'],
//   sinBalon: ['Boxeo', 'Surf', 'Trekking'],
// };

var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
// console.log(persona.edad) 
persona.nombre = 'Martin';
// console.log(persona.nombre);
persona.edad = 36
// console.log(persona.edad);


var autos = {}
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
delete autos.marcas;
console.log(autos);

//

var misFunciones = {
  saludar: function () {
    console.log('Hola');
  },
};

misFunciones.saludar();

//


var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes']};
// console.log(atuendos.pies);

atuendos['piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas [propUno] = ['Frutas', 'Vegetales'];
  comidas [propDos] = ['Hamburguesa', 'Papas Fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);


var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty('autor');
console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro)
console.log(todasLasPropiedades);

var mundo = {continentes: 7, paises: 195, oceanos: 5};
for(var prop in mundo){
  console.log('Esta es la propiedad: ' + prop);
  console.log('Este es el valor: ' + mundo[prop]);
  } 

  var mascota = {
    animal: 'Perra', 
    raza: 'Pechopollo', 
    amistoso: true, 
    dueña: 'Allison Martinez',
    info: function () {
      console.log('Mi ' + this.animal + ' es una ' + this.raza);
    }
  };
  

mascota.info();

//

CLASES

function Auto(puertas, color, marca, año, ruedas) {
  this.puertas = puertas;
  this.color = color;
  this.marca = marca;
  this.año = año;
  this.ruedas = ruedas;

  this.informacion = function (){
    console.log('Este es un ' + this.marca + ' de color ' + this.color);
  }
}

var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

miPrimerAuto.informacion();

console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);


//


class Auto{
  constructor (puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas; 
  }
}

let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);

//

class Football {
  constructor (jugador){
    this.judador = jugador;
  }

  obtenerNombre (){
    console.log(this.judador);
  }
}

var argentina = new Football('Messi');
var brasil = new Football ('Pele');

argentina.obtenerNombre();
brasil.obtenerNombre()
