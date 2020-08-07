/*
.-Escribir una función que reciba un string y devuelve el inverso. Por ejemplo: recibe "Hola Mundo!" y devuelve "!odnuM aloH"

.-Escribir una funcion que reciba un string y devuelva la primera letra de cada palabra. Por ejemplo, si recibe 'Universal Serial Bus' debe devolver 'USB'.

.-Programa de astrología: el usuario debe ingresar el día y mes de su cumpleaños y el programa le debe decir a qué signo corresponde.
	Aries: 21 de marzo al 20 de abril. 
	Tauro: 21 de abril al 20 de mayo.
	Geminis: 21 de mayo al 21 de junio. 
	Cancer: 22 de junio al 23 de julio.
	Leo: 24 de julio al 23 de agosto. 
	Virgo: 24 de agosto al 23 de septiembre.
	Libra: 24 de septiembre al 22 de octubre. 
	Escorpio: 23 de octubre al 22 de noviembre.
	Sagitario: 23 de noviembre al 21 de diciembre. 
	Capricornio: 22 de diciembre al 20 de enero.
	Acuario: 21 de enero al 19 de febrero. 
	Piscis: 20 de febrero al 20 de marzo.
 */

let s = "hola"

console.log(s[0])
console.log(s.charAt(0))

function invertirString (cadena){
  var stringInvertido = "";
  for(let i = cadena.length -1; i>=0; i-- ){
    stringInvertido += cadena[i];
  }
  return stringInvertido;
}
console.log(invertirString("Hola Mundo!!"));
console.log(invertirString(""));


function abreviatura (string){
  var resultado = "";
  for(let i = 0; i < string.length; i++){
    if(i === 0){
      resultado += string[i]; 
    }
  }
  return resultado;
}
console.log(abreviatura('Karina'));

function dividirPalabra1(cadena){
  var resultado ="";
  var palabras = cadena.split(" ");
  for(let i = 0; i < palabras.length; i++){
    resultado +=  palabras[i][0].toUpperCase()
  }
    return resultado;
}

console.log(dividirPalabra1("hola como estas yo muy bien"));  


function dividirPalabra2(cadena){
  var resultado ="";
  var palabras = cadena.split(" ");
  for(let i = 0; i < palabras.length; i++){
    var palabra = palabras[i]
    resultado +=  palabra[0].toUpperCase()
  }
    return resultado;
}
console.log(dividirPalabra2("hola como estas yo muy bien"));  

function horoscopo (dia, mes){
  if(dia >= 23 && mes == 10) || (dia <= 22 && mes==11){
    return "escorpio";
  }
  return "No pertenece a este signo";
} 

console.log(horoscopo(15, 1));