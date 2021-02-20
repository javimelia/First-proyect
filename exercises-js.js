//1. Compara tu edad (o una cualquiera) con la de Fernando Simón. muestra en consola si eres menor, mayor o tienes la misma edad que él.
//if()

function f1() {
    let edadFernandoSimon = document.getElementById("edad1").value
    let edadCualquiera = document.getElementById("edad2").value

    if (edadFernandoSimon == edadCualquiera) {
        result = "Tenéis la misma edad!"
    }

    else {
        if (edadFernandoSimon > edadCualquiera) {
            result="Fernando Simón es mayor!"
        }

        else {
            result="Eres mayor que Fernando Simón!"
        }
    }
    document.getElementById("resultado1").innerHTML= result ;
}

//2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una string que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
//if(), %

function f2() {

    let numero = document.getElementById("ej2").value

        if (numero % 2 == 0) {
            result="El número es par!";
        }

        else {
            result="El número es impar!";
        }
    document.getElementById("resultado2").innerHTML= result ;
}

//3. recorre la array y muestra los valores múltiplos de 3 en consola
//for(), if(), %

var num3 = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
var num3esp = num3.join(", ");
document.getElementById("array3").innerHTML= "Array: [" + num3esp + "]";

function f3() {

    for (let i=0; i<=num3.length;i++) {
        if(num3[i] % 3==0) {
            console.log(num3[i]);
        }
    }

}


//4. Dada la array, escribe una función que encuentre el número menor. (No utilizar Math.min())
//for(), if()

var num4 = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
var num4esp = num4.join(", ");
document.getElementById("array4").innerHTML= "Array: [" + num4esp + "]";

function f4() {
    
    var min = num4 [0];
    for (var i = 0; i < num4.length ; i++) {
        if (num4[i] < min) {
            min = num4[i];
        }
    }
    document.getElementById("resultado4").innerHTML= "El número menor es el " + min ;
}


//5. Utilizando la array anterior, encuentra el número más grande. (No utilizar Math.max())
//for(), if()

var num5 = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43]
var num5esp = num5.join(", ");
document.getElementById("array5").innerHTML= "Array: [" + num5esp + "]";

function f5() {

    let num2 = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
        var max = num2 [0];
        for (var i = 0; i < num2.length ; i++) {
            if (num2[i] > max) {
                max = num2[i];
            }
        }
    document.getElementById("resultado5").innerHTML= "El número mayor es el " + max ;
}

//6. Utilizando la array anterior, encontrar los números que se repiten, guardarlos en una array (si aun no existen en esta) y mostrarlos en consola
//for(), if(), push(), includes()

var num6 = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43]
var num6esp = num6.join(", ");
document.getElementById("array6").innerHTML= "Array: [" + num6esp + "]";

function f6yf7s () {
    f6();
    f7s();
}

var norepe = []

function f6() {

    for (var i=0; i < num6.length ; i++) {
        for(var j=i+1; j < num6.length; j++) {
            if (num6[i] === num6[j]) {
                if (!norepe.includes(num6[i])){
                    norepe.push(num6[i])
                }
            }
        }
    }    
    norepeEsp = norepe.join(", ");
    document.getElementById("resultado6").innerHTML= "Números repetidos: [" + norepeEsp + "]";
}


//7. Utilizando la array anterior, elimina los numeros pares
//for(), if(), %, splice()

function f7s() {
    document.getElementById("array7").innerHTML= "Array: [" + norepeEsp + "]";
}

function f7(){

    for (let i= norepe.length -1 ; i >= 0 ; i--) {
        if (norepe[i] % 2 === 0) {
            norepe.splice(i,1);
        }
    }
    norepeEsp = norepe.join(", ");
    document.getElementById("resultado7").innerHTML= "Números repetidos e impares: [" + norepeEsp + "]";
}

//8. Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random() para obtener números aleatorios 
//entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
//repitiendo 36.000 veces esta operación.
//Math.random(), for(), push()

var resultados = []

function f8(){
    
    resultados = []

    for (i=0 ; i<36000 ; i++) {
        var dado1 = Math.floor(Math.random() * 6 + 1);
        var dado2 = Math.floor(Math.random() * 6 + 1);
        var suma = dado1 + dado2;
        resultados.push(suma);
    }
    console.log(resultados)
    resultados10 = resultados.splice(0,10).join(", ")
    document.getElementById("resultado8").innerHTML= "Sumas dados: [" + resultados10 + ", ...]";
}

//9. Haz que el ejercicio anterior pase la array obtenida a la función de este ejercicio. Calcula el promedio de todos los lanzamientos de dados.
//for()

function f9(){

    var sumatorio = 0

    for(i=0; i < resultados.length; i++) {
        masSuma = resultados[i]
        sumatorio += masSuma
    }

    promedio = sumatorio/=36000
    promedio4decimales = promedio.toFixed(4)
    document.getElementById("resultado9").innerHTML= "Media lanzamientos: " + promedio4decimales;

}

//10. Haz una copia de la array del ejercicio 3, ordenala de forma ascendente, y coloca el siguiente número donde le corresponda.
//Array.from(), sort(), splice(), for(), if()

var num3esp = num3.join(", ");
document.getElementById("array10").innerHTML= "Array: [" + num3esp + "]";

var copia = Array.from(num3)

function f10ord () {

    copia.sort (function(a, b) {
        return a - b;
        }
    )
    
    enviar.disabled = false;

    let copiaesp = copia.join(", ");
    document.getElementById("array10").innerHTML= "Array: [" + copiaesp + "]";
}

function f10des () {
    enviar.disabled = true;
    document.getElementById("array10").innerHTML= "Array: [" + num3esp + "]";
}

function f10añadir () {

    var numerito = document.getElementById("numero").value

    if (numerito !== undefined) {
        for(i=0; i < copia.length; i++) { 
            if ((numerito - copia[i]) > 0) { 
                var posicion = i + 1 
            } 
        }
    }

    document.getElementById("numero").value = "";

    copia.splice (posicion, 0, numerito)

    let copiaesp = copia.join(", ");
    document.getElementById("resultado10").innerHTML= "Array: [" + copiaesp + "]";
}

function f10reset () {
    document.getElementById("resultado10").innerHTML= "Array: [" + copiaesp + "]";
}


//11. Dado el siguiente objeto, muestra en consola una string con el nombre y apellido.

let mentor = {
    nombre: "Lluís",
    apellido: "Garcia",
    edad: 26,
    poblacion: "Sallent",
    empresa: "Let's Coder",
    hobbies: ["futbol", "codigo", "videojuegos"],
    mascotas: [{
        nombre: "Tuca",
        tipo: "perro",
        sexo: "hembra"
    },
    {
        nombre: "Tam",
        tipo: "perro",
        sexo: "macho"
    }]
};


//12. Dado el objecto anterior, crea una array con todas las keys y luego úsala para mostrar en consola todas las values
//Object.keys(), for()


//13. Dado el objeto anterior, añade las edades a las mascotas. Luego muestra cada una de las mascotas en consola por separado
let edadTuca = 4;
let edadTam = 2;



// Conectar un archivo .json a Javascript

fetch('datos.json')
  .then(response => response.json())
  .then(datos => {
  	console.log(datos);
  });