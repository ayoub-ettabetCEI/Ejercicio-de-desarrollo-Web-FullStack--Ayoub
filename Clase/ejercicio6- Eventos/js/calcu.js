const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const suma = document.querySelector(".suma");
const resta = document.querySelector(".resta");
const multi = document.querySelector(".multi");
const divi = document.querySelector(".division");
const reset = document.querySelector(".reset");
const p = document.querySelector(".msj");


function sumaopperacion() {
    event.preventDefault(); // No recarga la pagina
    console.log(num2.value);
    total = parseInt(num1.value) + parseInt(num2.value);
    p.innerHTML = "El resultado de la suma es " + total;
} 
suma.addEventListener("click", sumaopperacion);

function restaopperacion() {
    event.preventDefault(); // No recarga la pagina
    total = parseInt(num1.value) - parseInt(num2.value);
    p.innerHTML = "El resultado de la resta es " + total;
} 
resta.addEventListener("click", restaopperacion);

function multiopperacion() {
    event.preventDefault(); // No recarga la pagina
    total = parseInt(num1.value) * parseInt(num2.value);
    p.innerHTML = "El resultado de la multiplicación es " + total;
} 
multi.addEventListener("click", multiopperacion);

function diviopperacion() {
    event.preventDefault(); // No recarga la pagina
    total = parseInt(num1.value) / parseInt(num2.value);
    p.innerHTML = "El resultado de la division es " + total;
} 

divi.addEventListener("click", diviopperacion);


//  Reset

function resetear() {
    p.innerHTML = "";
} 

reset.addEventListener("click", resetear);