/*

var x = 20 --> Declarar un valor de forma global.
let x = 20 --> Declarar un valor solo dentro de un "scope" (una función).
const x = 20 --> Declarar un valor dentro de un scope que no puede ser cambiado/sobreescrito.

string = ""
array = []
json = {}
key (p.e x) = valor/value

*/



var edadFS= 57;
var miEdad = 59;


console.log(edadFS);
console.log(miEdad);

console.log(edadFS + miEdad);

var suma = edadFS + miEdad;
console.log (suma);

if (edadFS == miEdad) {
    console.log ("iguales");
}
else {
    if (edadFS > miEdad) {
        document.write("Fernando Simon es mayor!");
    }
    else {
        result = miEdad - edadFS;
        document.getElementById("resultado").innerHTML = "Yo soy mayor por " + result + " años";
        console.log (result);
    }
}

