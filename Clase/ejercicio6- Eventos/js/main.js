// click , change, submit, onload, mouseover

const btn = document.querySelector(".btn");
const body = document.querySelector("body");

function changeBackground() {
    console.log("fondo");

    // esto es lo mismo que el if de abajo
    body.classList.toggle("fondo");



    // if (body.classList.contains("fondo")) {
    //     body.classList.remove("fondo");
    // }else{
    //     body.classList.add("fondo");
    // }

    
}


function handleBtn() {
    const p = document.querySelector(".texto");
    p.innerHTML = "me ha clicado"
    // llamar la funcion que pinta el fondo
    changeBackground()
}
//  handleBtn --> funcion callback
btn.addEventListener("click", handleBtn);

