const form = document.querySelector(".form");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const p = document.querySelector(".msj");


//  Reset
function resetear() {
    p.innerHTML = "";
    num1.value = "";
    num2.value = "";
} 
function handleForm(ev) {
    ev.preventDefault();
    // console.log(ev.target.value);
    const elementoClicado = ev.target.value;

    const num1Valor = parseInt(num1.value);
    const num2Valor = parseInt(num2.value);
    resultado = "";
    if (elementoClicado === "+") {
        resultado = num1Valor + num2Valor;
    }else if( elementoClicado === "-" ){
        resultado = num1Valor - num2Valor;
    }else if( elementoClicado === "*" ){
        resultado = num1Valor * num2Valor;
    }
    else if( elementoClicado === "/" ){
        resultado = num1Valor / num2Valor;
    }
    
   

    p.innerHTML = "El resultado de " + num1Valor + elementoClicado + num2Valor + " = " + resultado;
    
    if (elementoClicado === "reset") {
        resetear();
    }
    

 }
 form.addEventListener("click", handleForm);


 

// reset.addEventListener("click", resetear);