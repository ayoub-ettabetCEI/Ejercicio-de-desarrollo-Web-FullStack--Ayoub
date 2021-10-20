//  Funciones
var msGlobal = "mensaje global";


function pintarNombre(nombre, apellido){
    console.log("Hola " + nombre + " "+ apellido);

}

pintarNombre("ayoub","et tabet");

//  Calculo del IVA

function calcularIva(precio) {
    const iva = precio * 0.21;
    const total = precio + iva;
    console.log("precio "+ precio + " iva " +iva+ " total "+ total  );
}

calcularIva(1500);


function suma(num1,num2) {
    // Ver todo el proceso del codigo
    const resultado = num1 + num2;
    console.log(resultado); 
    return resultado;  
    //el return corta
   
}
// bloque de codigo
var suma = suma(15,20);

// scope --> entorno

// truthy
const nameUser = "dayana";
// falsy
const apellido = parseInt(nameUser);

if ( suma <= 1000 ){ 
    console.log("hola");
}

//  ------------------Funciones Arrow o Felchas 

const multiplicacion = (num1, num2) =>{
    const resultado = num1 * num2;
    console.log("la multiplicación es "+ resultado);
}
multiplicacion(10,2);


// Funciones Anonimas

const resta = function (num1, num2){
    const resultado = num1 - num2;
    console.log("resta "+ resultado);
}

resta(50,30);



// Ejercicio Formulario 

//  2 imputs con values de numeros 
// 1 parrafo para pintar el resultado desde js
// crear una funcion donde le indique la operación a realizar
// y luego pintar ese resultado en el parrafo


const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const texto = document.querySelector(".texto");

console.log(numero1.value);

function calculo(num1,num2, operacion){
    let result;
    if (operacion === "+") {
        result = num1 + num2;

        // texto.innerHTML = result;

    }else if (operacion === "-"){
        result = num1 - num2;
        // texto.innerHTML = result;
    }else if (operacion === "*"){
        result = num1 - num2;
    }else if (operacion === "/"){
        if (num2 != "0"){
            result = num1 / num2;
        }else{
            result = "el segundo numero es 0";
        }
    }
    texto.innerHTML = result;


}

// console.log(numero1.value);

calculo( parseInt(numero1.value) , parseInt(numero2.value), "/");



