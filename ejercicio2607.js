/*Dada un formato de tienda extendido:*/

let ejemploTienda = {
	id: 1,
	nombre: "Pepito",
	url: "www.urlfalsa.com",
	estado: "abierto",
	estrellas: 3.5,
	ropasEnVenta:["pantalon", "remera", "buzo", "sweater", "camisa", "campera", "zapatilla", "zapato", "pollera"],
	talles:["XXXS","XXS","XS","S","M","L","XL","XXL","XXXL"],
	comentarios:[
		{
			"texto":"Tienda increible",
			"fecha": new Date(2020,05,01),
			"puntuacion":"positivo"
		},
		{
			"texto":"Estuvo bien, la atención no fue mala, tenían los talles que buscaba",
			"fecha": new Date(2020,06,07),
			"puntuacion":"neutro"
		},
		{
			"texto":"Una garcha tremenda, me atendieron mal y no tenían nada de lo que decían",
			"fecha": new Date(2020,04,21),
			"puntuacion":"negativo"
		}
	]
}

console.log(ejemploTienda)

/*Ejercicio 1

Desarrollar una función que reciba dos parámetros: un arreglo de tiendas y un mapa con filtros y devuelva las tiendas que cumplen con todos los filtros.  Entre los filtros posibles vamos a tener:

1) Filtro por estado (ya desarrollado), posibles valores "abierto", "cerrado" y "inhabilitado"
2) Filtro por estrellas (ya desarrollado), pero la cantidad de estrellas ahora nos la pasan en el filtro (en el ejercicio anterior queriamos obtener las que tenian 4 o mas estrellas)
3) Filtro por tipo de ropa a la venta.  Es suficiente con que la tienda tenga al menos un tipo de ropa a la venta entre los que aparecen en el filtro.
4) Filtro por talle.  Al igual que la ropa, es suficiente que la tienda tenga al menos un talle entre los que aparecen en el filtro.


A tener en cuenta para resolver el ejercicio:

a) Un objeto en Javascript se puede ver como un mapa (una estructura de datos muy usada en programación).
	Un mapa es un objeto como el siguiente:*/

	let mapa = {
		"clave1": "valor1",
		"clave2": "valor2"
	}

  console.log(mapa)

	/*
  y para acceder al valor1 por ejemplo, en lugar de hacer mapa.clave1 como venimos haciendo para acceder a un valor, podemos hacer mapa["clave1"].  Esto sirve como tip para poder obtener los filtros.

  Investigando un poco descubrí que existe una estructura llamada Map (aparte del object).  Se puede ver acá https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map.

  El ejercicio se puede resolver tanto con object como con Map, les dejo a ustedes como un bonus investigar sobre el Map y utilizarlo, por lo que vi es bastante parecido pero con mas propiedades.
  Acá les dejo otro link sobre mapas: https://www.todojs.com/objetos-map-set/


b) El mapa puede tener de 0 (devolvemos todas las tiendas) a 4 filtros (solo las tiendas que cumplan con TODAS las condiciones serán devueltas por la función)
c) Ejemplo completo de mapa con todos los filtros (estado, reputacion, ropa y talle):*/

let ejemploFiltros = {
  "estado": ["abierto", "cerrado"],
  "reputacion": 3,
  "ropa": ["pantalon", "remera"],
  "talle": ["S","M"]
}

console.log(ejemploFiltros)

/*d) Recuerden que no tienen que desarrollar su solucion solo para los ejemplos que les di.  La función (y funciones auxiliares) que desarrollen tiene que funcionar con los parámetros que reciben, no con variables globales.



Bonus 1 (filtro de ropa y talle exclusivo true/false)

Supongamos que los filtros de ropa y talle ahora tienen la siguiente estructura:*/

let ejemploFiltrosExclusivos = {
  "ropa": {
    "exclusivo": true,
    "valores": ["pantalon", "remera"]
    },
  "talle": {
    "exclusivo": false,
    "valores": ["S","M"]
  }
}

console.log(ejemploFiltrosExclusivos)

/*Si "exclusivo" es true, entonces la tienda tiene que tener TODOS las ropas o talles para que cumpla la condición.
Si "exclusivo" es false, entonces viene funcionando como hasta ahora (con que tenga solo un talle o ropa es suficiente)

Bonus 2 (Dificil)

Javascript incorporó las "funciones flecha", funciones anónimas (sin nombre) que se pueden pasar como parámetro o guardar en una variable y que utilizan el operador =>.
Para entender mejor como funcionan, ver los siguientes recursos:
https://www.youtube.com/watch?v=CUNlmf1sx1o
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions

El objetivo de este punto es lo siguiente: hasta ahora la reputación solo acepta un valor numérico (entre 1 y 5) y solo devuelve aquellas tiendas que tengan una cantidad de estrellas mayores a ese número.
Lo que queremos hacer ahora es que la reputación sea una función flecha y permita otros tipos de filtros (que nos devuelva tiendas menores que un numero o en un rango de números).
Ejemplo:
.-Permitir que acepte devolver tiendas con una reputación menor a 3
.-Permitir que acepte devolver tiendas con una reputación entre 2 y 4.




Ejercicio 2

Desarrollar otra función que reciba también un arreglo de tiendas y un mapa de filtro, pero en este caso los filtros van a ser:
1) Filtro por estado de comentarios (estados posibles: "positivo", "neutro" y "negativo")
2) Filtro por fecha de comentarios (devolver aquellos comentarios cuya fecha es mayor a que se recibe en el filtro)

La función tiene que devolver un arreglo donde cada elemento va a tener: id de tienda y el arreglo de comentarios que pasaron los filtros.*/

let ejemploFiltrosComentarios = {
  "estado": ["positivo", "neutro"],
  "fecha": new Date(2020,04,21)
}

console.log("Estados: " + ejemploFiltrosComentarios["estado"])
console.log("Fecha: " + ejemploFiltrosComentarios["fecha"])

/*Bonus 1

Que pasa si a una tienda se le filtran todos los comentarios? Podemos resolverlo de dos maneras:
1) Devolver el id de la tienda con un arreglo vacío de comentarios
2) No devolver la tienda en el arreglo resultado

De qué manera lo resolvieron? Pueden entender en su código como resolverlo de la otra manera?

Bonus 2

Si resolvieron el Bonus 2 anterior, pueden transformar los 2 filtros de comentarios en funciones flecha?
*/