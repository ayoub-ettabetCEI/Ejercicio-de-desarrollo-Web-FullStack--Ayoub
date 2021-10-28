const dias = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

console.log(dias);
// añadir elemento al array
dias.push("sabado", "domingo");
console.log(dias);
// -----------------------------------

const numeros = [];

function numeros1() {
    for (let i = 1; i <= 100; i++) {
        numeros.push(i);
    }
    numeros.reverse();
    return numeros;
}

console.log(numeros1())

// elimina un elemento del array

const edad = [20,25,33,29,89,63];

console.log(edad.splice(2,3));


//  extraer con el slice que no modifica el array original


// Busca un elemento dentro de un array

const meses = ["Enero", "Marzo", "Abril", "Mayo", "Junio", "mayo"];
const indiceMes = meses.indexOf("mayo"); 
console.log(indiceMes);


// find y findIndex

const personas = [
    { nombre: "lucia", apellido: "garcias"},
    { nombre: "ivan", apellido: "rodriguez"},
    { nombre: "ramon", apellido: "romeo"}
];

const indicePersona = personas.findIndex((per)=>per.nombre==="ivan");

console.log(indicePersona);
