console.log(`readyyyy :)))`);

//tipos
const precioProducto = 150;
const precio = 100.90

// STRING
const name = "Ayoub";

// booleanos true-false
const hijos = true;

// undefined
 const apellido = undefined;
 const title = document.querySelector("title");
 console.log(title.value);


//  Operaciones aritmeticas +- / * %

const numA = 50;
const numB = 20;
const numC =  3;
const resultado = numA + numB;
console.log(resultado);

console.log("el resultado es " + resultado);



///////   CONNDICIONES 

const edad = 15;

// operaciones comparacion <> >= <= === !==

// if compuesto

if(edad >= 18){
    console.log("eres mayor de edad");
}else{
    console.log("eres menos de edad");
}


// if anidados --> un IF dentro un else

// personas (menos 15)  --> NIÑOS
// personas (entre 15 y 20) --> adolescentes
// personas (entre 20 y 60) --> adultos
// personas (mas de 60) --> mayores

const age = 48;

if (age < 15){
    console.log("niño");

}else if( age >= 15 && age < 20){
    console.log("adolescente");
}else if( age >= 20 && age <= 60){
    console.log("adulto");    
}else if ( age >= 60 ){
    console.log("mayores");
}



// SWITCH - CASE

const dia = 4;
switch (dia) {
    case 1: console.log("lunes");
        break;
    case 2: console.log("Martes");
        break;
    case 3: console.log("Miercoles");
        break;    
    case 4: console.log("Jueves");
        break;  
    case 5: console.log("Viernes");
        break; 
    default: console.log("debe ser un numero del 1 al 5");
}


// TRUTHY
const nameUser = "ayoub";
//  FALSY
const apellido1 = parseInt(nameUser);

if (nameUser) {
    console.log(nameUser);
}
if (!apellido1) {
    console.log(apellido);
}



//  EJERCICIO NUM MAYOR Y SEGUNDO MAYOR

console.log("EJERCICIO NUM MAYOR Y SEGUNDO MAYOR  -->");

const A = 10;
const B = 50;
const C = 40;

if (A > B && A > C ) {
    if (B > C){
        console.log("El num mayor es "+ A +" el segundo es "+ B + " y el menor es "+ C);
    }else if (B == C) {
        console.log("El num mayor es "+ A +" el segundo es "+ B + " y es igual al menor "+ C);
    }
    else{
        console.log("El num mayor es "+ A +" el segundo es "+ C + " y el menor es "+ B);
    }

       
}else if (B > A && B > C ){
    if (A > C){
        console.log("El num mayor es "+ B +" el segundo es "+ A + " y el menor es "+ C);
    }else if (A == C) {
        console.log("El num mayor es "+ B +" el segundo es "+ A + " y es igual al menor "+ C);
    }
    else{
        console.log("El num mayor es "+ B +" el segundo es "+ C + " y el menor es "+ A);
    }
        
}else if (C > A && C < B ){
    if (A > B){
        console.log("El num mayor es "+ C +" el segundo es "+ A + " y el menor es "+ B);
    }else if (A == B) {
        console.log("El num mayor es "+ C +" el segundo es "+ A + " y es igual al menor "+ B);
    }
    else
        console.log("El num mayor es "+ C +" el segundo es "+ B + " y el menor es "+ A);
}


// EL JUEGO DE LAS CONVERSION DE EDADES CON PERROS A HUMANOS


const perro = 15;


switch (perro) {
    case 1 : console.log("15 años de Humano");
        break;
    case 2: 
        EdadHumano = 15 + 9 ;   
        console.log(EdadHumano +" años de un humano");
        break;
    case 3: 

        EdadHomano= 24 + (perro * 5);  
        console.log(EdadHomano + " años del Humano");
        break;    
    case 4: 
    EdadHomano=  24 + (perro * 5);  
    console.log(EdadHomano + " años del Humano");
    break;  
    case 5: 
    EdadHomano=  24 + (perro * 5);  
    console.log(EdadHomano + " años del Humano");
    break; 
    case perro > 5: 
    EdadHomano=  24 + (perro * 5);  
    console.log(EdadHomano + " años del Humano");
    break; 
    
    
    // default: console.log("debe ser un numero del 1 al 5");
}
        // ESTA MAL


        
//  EJERCICIO ALERTA

const titulo = document.querySelector(".titulo");
const texto = document.querySelector(".aviso");
const contenedor = document.querySelector(".container");

// console.log(container.classList.contains(container));
if (contenedor.classList.contains("js-alerta")){

    titulo.innerHTML = "AVISO";
    texto.innerHTML = "TENGA CUIDADO";
    contenedor.classList.add("warning");

}   