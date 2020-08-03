function sumarNumeros(unNumero){
  return unNumero + 1;
}

//console.log(sumarNumeros(2));

function aspectoGato(nombre){
  if(nombre === "Bolivar"){
    return "flaco"
  }

  if(nombre === "Simon"){
    return "gordo"
  }

  return "no existe"
}

//console.log(aspectoGato("Bolivar"));

const integrantes = ["Mono", "Juanpi",  "Kari", "Ruben"];
//console.log(integrantes);

 
function rolDeIntegrantes(nombre){
  if (nombre === "Ruben"){ 
    return "manager"
  }
 
  if (nombre === "Mono" || nombre === "Kari"){ 
    return "programador"
  } 
    
  if (nombre === "Juanpi"){ 
    return "tester"
  } 
    return "No integrante del equipo"

}

console.log(rolDeIntegrantes("Ruben")) //manager
console.log(rolDeIntegrantes("Mono")) //programador
console.log(rolDeIntegrantes("Kari")) //programador
console.log(rolDeIntegrantes("Juanpi")) //tester

/*
https://www.w3schools.com/js/js_dates.asp
Crear una variable que defina un objeto los datos propios: 
	nombre, 
	edad, 
	fecha de nacimiento, 
	valor si te gusta el helado,
	lista de gustos de helado (o de otra comida, si no te gustan) ordenados de mejor a peor
  */

 let datosMios = {
   nombre: 'Karina',
   edad: 20,
   fechaDeNacimiento: new Date(1994,01,15,07,15),
   leGustaElHelado: false,
   listaDeComidas: ['Fideos con salsa y albondigas', 'Milanesas con pure y ketchup', 'Guiso de lentejas']
 }

 let datosRuben = {
   nombre: 'Ruben',
   edad: 33,
   fechaDeNacimiento: new Date(1986,11,05,13,15),
   leGustaElHelado: false,
   listaDeComidas: ['Fideos con salsa y albondigas', 'Milanesas con pure y ketchup', 'Guiso de lentejas','','','','','']
 }

  let datosMono = {
   nombre: 'Rodrigo',
   edad: 33,
   fechaDeNacimiento: new Date(1986,01,15,07,15),
   leGustaElHelado: false,
   listaDeComidas: []
 }
console.log(datosMios);

/*Crear una funcion que acepte un numero y devuelva el negativo de ese numero*/

function negativo(numero){
  if (numero===0){
    return 0;
  }
  return numero *-1;
}

console.log(negativo(4));
console.log(negativo(-5));
console.log(negativo(0));

/*
Funcion que reciba el objeto con tus datos y te devuelva si te gusta el helado o no
*/
function meGustaElHelado(datosDePersona){
return  datosDePersona.leGustaElHelado;
}

console.log(meGustaElHelado(datosMios));

console.log(meGustaElHelado({
   nombre: 'Karina',
   edad: 20,
   fechaDeNacimiento: new Date(1994,01,15,07,15),
   leGustaElHelado: true,
   listaDeComidas: ['Fideos con salsa y albondigas', 'Milanesas con pure y ketchup', 'Guiso de lentejas']
 }));

 /*Definir una funcion que acepte un array de strings y devuelva el total de caracteres de todos los nombres*/
function acumulador(strings){
  var suma = 0;      
  for (var i = 0; i <strings.length ; i++){
    suma = suma + strings[i].length;
  }
  return suma;
}
console.log(acumulador(['Juan', 'Kari', 'Ruben', 'Mono']));
  var arreglo = ['Juan', 'Kari', 'Ruben', 'Mono']; 
  console.log(acumulador([]));

/*Lo mismo que la anterior pero que devuelva un array donde cada elemento sea la cantidad de caracteres de esa palabra*/
   function acumuladorDeNumeros(strings){
     var suma = [];
     for( var i = 0; i <strings.length; i++){
      suma.push(strings[i].length);
     }
      return suma;
   }
console.log(acumuladorDeNumeros(['Robin','Jazmin'])); //5,6
console.log(acumuladorDeNumeros(['Sasha','Pepe']));// 5,4
console.log(acumuladorDeNumeros(['Simon','Bolivar']));//5,7
console.log(acumuladorDeNumeros(['Cata','Chester']));//4,7

   
/*Funcion que reciba el objeto con tus datos y te devuelva la comida que menos te gusta*/
function comidaMenosGustosa(persona){
  if(persona.listaDeComidas.length > 0){
     return persona.listaDeComidas[persona.listaDeComidas.length-1]
  }else{
    return 'No tiene comidas';
  }
 
}
console.log('nombre del capataz ' + datosMios.nombre)
console.log(comidaMenosGustosa(datosMono));

/*
Dada una estructura de tienda:

let ejemploTienda = {
	id: 1,
	nombre: "Pepito",
	url: "www.urlfalsa.com",
	estado: "abierto",
	estrellas: 3.5
}

Los estados posibles son: : "abierto", "cerrado" y "inhabilitado"
Las estrellas van de 1 a 5

Definir las siguientes funciones:

1) Una que reciba un arreglo de tiendas y un estado, y devuelva solo aquellas que estén en ese estado
2) Utilizando la función anterior, definir otra que reciba los mismos parámetros pero que devuelva solo los ids en lugar de las tiendas.
3) Definir la función mejoresTiendas que recibe un arreglo de tiendas y devuelva solo aquellas que tengan un puntaje mayor a 4
*/

function estadoDeTienda(arregloDeTienda,estado){
  var tiendasResultado = [];
  for (let i = 0; i < arregloDeTienda.length; i++ ){
     if(estado === arregloDeTienda[i].estado){
      tiendasResultado.push(arregloDeTienda[i]);
    }
  }
return tiendasResultado;
}

let ejemploTiendas = [{
	id: 1,
	nombre: "Pepito",
	url: "www.urlfalsa.com",
	estado: "cerrado",
	estrellas: 3.5
}];
let ejemploTiendas1 = [{
	id: 1,
	nombre: "Calandria",
	url: "www.urlfalsa.com",
	estado: "abierto",
	estrellas:4 
}];
let ejemploTiendas2 = [{
	id: 1,
	nombre: "Monito",
	url: "www.urlfalsa.com",
	estado: "inhabilitado",
	estrellas: 3.5
}];
let ejemploTiendas3 = [{
	id: 1,
	nombre: "El Antojo",
	url: "www.urlfalsa.com",
	estado: "abierto",
	estrellas: 5
}];

console.log(estadoDeTienda(ejemploTiendas,"abierto"))
console.log(estadoDeTienda(ejemploTiendas,"cerrado"))
console.log(estadoDeTienda(ejemploTiendas,"inhabilitado"))

function numeroIds( arregloDeTienda,estado){
  let tiendasFiltradas = estadoDeTienda(arregloDeTienda, estado)
  var ids = [];
for (let i = 0; i < tiendasFiltradas.length; i++){
ids.push( tiendasFiltradas[i].id);
}

  return  ids;
}
console.log(numeroIds(ejemploTiendas,"abierto"));
console.log(numeroIds(ejemploTiendas,"cerrado"));


function mejoresTiendas(tiendas){
  var  lasMasPopulares = [];
  for (let i = 0; i < tiendas.length; i++){
    if (tiendas[i].estrellas >=4){
      lasMasPopulares.push(tiendas[i])
    }
  }
  return lasMasPopulares;
}

console.log(mejoresTiendas(ejemploTiendas1))
console.log(mejoresTiendas(ejemploTiendas))
console.log(mejoresTiendas(ejemploTiendas2))
console.log(mejoresTiendas(ejemploTiendas3))
