// Cuando carga la pagina
const form = document.querySelector(".form");
const nombre = document.querySelector("#nombre");
const pais = document.querySelector("#pais");
const estado = document.querySelector(".estado");
const p = document.querySelector(".msj");

// Cuando ocurre el evento submit
const handleForm = () => {
    event.preventDefault(); // No recarga la pagina
    const nombreValue = nombre.value;
    const paisValue = pais.value;
    const estadoValue = estado.value;

    p.innerHTML = "Hola " +nombreValue;

    

    if (parseInt(paisValue) === 1) {
        p.innerHTML +=  " Eres Español"
    }else if(parseInt(paisValue) === 2){
        p.innerHTML += " Eres Asiatico"
    }
    else if(parseInt(paisValue) === 3){
        p.innerHTML += " Eres Lation"
    }

    if (estadoValue === "s") {
        p.innerHTML += " y tu estado civil es soltero"
    }else if (estadoValue === "c") {
        p.innerHTML += " y tu estado civil es casado"
    }else if (estadoValue === "v") {
        p.innerHTML += " y tu estado civil es viudo"
    }
    // console.log(nombreValue);


 
}



form.addEventListener("submit", handleForm);